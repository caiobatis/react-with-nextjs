import config from './config'
import { logger } from './lib/logger'
import app from './app'

// app.listen(config.port, (err) => {
//   if (err) logger.error(err)

//   console.info(`Listening on port ${config.port}`)
// })


const next = require('next');
const port = parseInt(config.port, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });

const handle = server.getRequestHandler();
server.prepare().then(() => {
 app.get('*', (req, res) => handle(req, res));
 app.listen(port, (err) => {
	if (err) logger.error(err)
	logger.info(`🤘 Listening on port ${port}`)
 });
});
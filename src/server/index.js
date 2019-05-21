const express = require("express")
const next = require("next")
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')


const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ 
  dev
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express()


    server.use(morgan('tiny'))
    server.use(helmet())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())

    server.get('/post/:slug', (req, res) => {
      return app.render(req, res, '/post', { slug: req.params.slug })
    })
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

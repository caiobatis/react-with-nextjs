import { merge } from 'lodash'

const development = {
  port: 3500
}

const test = merge({}, development, {
})

const production = {
  port: process.env.PORT || 8080
}

const stage = merge({}, production, {
})

export default {
  development,
  test,
  production,
  stage
}

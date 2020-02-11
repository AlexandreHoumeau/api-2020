const _ = require('node-validator')

module.exports = _.isObject()
  .withOptional('first_name', _.isString())
  .withOptional('last_name', _.isString())
  .withRequired('email', _.isString({
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'Invalid email'
  }))
  .withRequired('password', _.isString())
  .withOptional('gender', _.isString())

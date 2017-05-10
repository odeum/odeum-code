if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Odeum.prod')
} else {
  module.exports = require('./Odeum.dev')
}

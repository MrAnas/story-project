const path = require('path')
const i18n = require('i18n')

/**
 * configure shared state
 */
i18n.configure({
  locales: ['en', 'de'],
  directory: path.join(__dirname, '/locales')
})


const { path } = require('@vuepress/utils')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'Hello, VuePress!',
  description: 'This is my first VuePress site',

  // theme and its config
  theme: path.resolve(__dirname, 'theme/index.js'),
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
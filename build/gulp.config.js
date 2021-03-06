const path = require('path')
const tsConfig = require('./ts.config')
const babelConfig = require('./babel.config')

const configs = {
  dirs: {
    components: path.resolve(__dirname, '../components'),
    lib: path.resolve(__dirname, '../lib'),
    es: path.resolve(__dirname, '../es'),
    devLib: path.resolve(__dirname, '../example/src/components/lib'),
    devEs: path.resolve(__dirname, '../example/src/components/es'),
  },
  tsConfig: tsConfig(),
  getBabelConfig: babelConfig,
}

module.exports = configs

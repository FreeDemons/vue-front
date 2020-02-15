const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: config => {

    config.plugins.push(
      new CopyWebpackPlugin([{
        from: resolve('src/assets/download'),
        to: 'download'
      }])
    );
  }
}
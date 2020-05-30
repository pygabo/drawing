const path = require('path');

/* npx webpack  --entry ./index.js  --output ./bundle.js --mode development */
module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js'
  }
}

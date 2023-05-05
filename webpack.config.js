const path = require('path');

module.exports = {
  mode: 'production', // or 'development' for non-minified output
  entry: {
    main: './public/browser-app.js',
    edit: './public/edit-task.js',
  }, // entry point of your JS code
  output: {
    filename: '[name].bundle.js', // name of the output file
    path: path.resolve(__dirname, 'public/dist'), // output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // handles CSS files
      },
    ],
  },
};

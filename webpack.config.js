const path = require("path");

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
      
      "Home": "./src/home/Home.js",
      "Products": "./src/products/Products.js",
      "Contact": "./src/contact/Contact.js",
      
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // This is the path to your variables
              prependData: "@import './src/scss/variables.scss'"
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin({
      /**
       * This function will be called for every tag used in each vue component
       * It should return an array, the first element will be inserted into the
       * components array, the second should be a corresponding import
       *
       * originalTag - the tag as it was originally used in the template
       * kebabTag    - the tag normalised to kebab-case
       * camelTag    - the tag normalised to PascalCase
       * path        - a relative path to the current .vue file
       * component   - a parsed representation of the current component
       */
      match(originalTag, {
        kebabTag,
        camelTag,
        path,
        component
      }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      }
    })
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
};
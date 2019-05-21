module.exports = {
  plugins: [
    require("postcss-easy-import")({ prefix: "_" }),
    require('postcss-utilities'),
    require('postcss-custom-selectors'),
		require('postcss-custom-properties'),
    require("autoprefixer")({})
  ]
};

module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
      config.module.rules.filter((rule) => rule.use && rule.use.loader === 'next-babel-loader')
  .map((loader) => {
      loader= [ { test: /\.jsx?$/,  loader: 'babel-loader', query: {compact: false,   presets: ['es2015']} }];
      return loader;
  });
  
      return config;
    }
  };

  
  // config.module.rules.filter((rule) => rule.use && rule.use.loader === 'next-babel-loader')
  // .map((loader) => {
  //     loader.use.options.generatorOpts = { compact: false };
  //     return loader;
  // });
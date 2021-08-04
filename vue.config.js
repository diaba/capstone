module.exports = {
  publicPath: process.env.VUE_APP_ENVIRONMENT === 'production' ? '/app/' : '/',
  transpileDependencies: ['vuex-persist'],
};

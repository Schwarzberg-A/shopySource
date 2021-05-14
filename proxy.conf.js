module.exports = {
  '/api': {
    "target": "https://heissberg.online",
    "secure": false,
    changeOrigin: true,
    "pathRewrite": {
      "^/api": ""
    }
  }
};

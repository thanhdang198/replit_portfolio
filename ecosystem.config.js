module.exports = {
  apps: [
    {
      name: "portf",
      script: "dist/index.js",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};

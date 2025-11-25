module.exports = {
  source: [
    "Primitives/**/*.json",
    "Semantic/**/*.json",
    "Typography/**/*.json",
    "global.json"
  ],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables"
        }
      ]
    },
    scss: {
      transformGroup: "scss",
      buildPath: "build/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables"
        }
      ]
    },
    js: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/es6"
        }
      ]
    }
  }
};
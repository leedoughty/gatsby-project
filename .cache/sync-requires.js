const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/leedoughty/Desktop/gatsby-project/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/leedoughty/Desktop/gatsby-project/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/leedoughty/Desktop/gatsby-project/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/leedoughty/Desktop/gatsby-project/src/pages/index.js")))
}


const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

// Change BASE_PATH if you are planning to have serve the static content 
// of this project on a different path. For example, I'm hosting it on
// www.harveydelaney.com/seng-portfolio, so I set BASE_PATH=seng-portfolio

module.exports = withTypescript(withSass({
  assetPrefix: process.env.BASE_PATH || '',
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  }
}));

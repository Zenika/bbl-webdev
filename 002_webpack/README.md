# Brown Bag Lunch 4 Web Dev - Webpack basics

Live coding done during session #2 on 23/01/2019.

## Getting Started

Wepback is a powerful tool for Web development. It allows:
* splitting / building you application, creating a dependency graph, removing unusued modules (tree-shaking)
* bundling your assets
* live-reloading, for development (save file -> watch result in browser)
* versioning and hashing output files


### Prerequisites

You need npm to run this example.

```
npm install
npm run start
```

### Debrief

In the coding session, we covered:
* Initiating a npm project with ```npm init -y```
* Installing the required npm modules: ```npm i webpack webpack-cli webpack-dev-server moment```
* Running npm modules with ```npx```
* Building the application using Webpack command line ```webpack app.js -o dist/bundle.js```
* Building the application using Webpack config file ```webpack.config.js```
* Using ```webpack-dev-server``` for hot reload
* Creating a npm 'start' script: ```"start": "webpack && webpack-dev-server --open"```
* Webpack modes 'development' vs 'production'
* Discussion around Webpack loaders, plugins and other features
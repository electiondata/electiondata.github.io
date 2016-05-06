# Open Election Data

## Development
 
### Environment
To set up the development environment for this website, you'll need to install the following on your system:
 
- [Node and npm](http://nodejs.org/)
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/)
- Gulp ( $ npm install -g gulp )
 
After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
```
Will also run `bundle install`
 
### Getting started
 
```
$ gulp serve
```
Compiles the compass files, javascripts, and launches the server making the site available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.
 
The `_config-dev.yml` file will be loaded alongside `_config.yml`.
 
### Other commands
Clean the compiled site. I.e. the `_site` folder
```
$ gulp clean
```
 
Compile the compass files, javascripts, and builds the jekyll site using `_config-dev.yml`.
Use this instead of ```gulp serve``` if you don't want to watch.
```
$ gulp
```
 
Compiles the site loading the `_config-stage.yml` alongside `_config.yml`. The javascript files will be minified.
```
$ gulp stage
```
 
Compiles the site loading the `_config-prod.yml` alongside `_config.yml`. The javascript files will be minified.
```
$ gulp prod
```
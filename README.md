# Open Election Data

### Contributing or Editing User Guide Pages

1. Determine if your post would best fit in **About The Data**, **Contributing**, or **Use** sections.

2. Each section has it's own folder in the root folder that contains that sections pages. If you are adding a new page, copy an existing one to use as a template. If you're simply editing an existing page, locate the page in the .md files and open it up.

3. You'll want to edit the front matter to start. Fields you'll want to hit are:

  | label        | controls          |
  | ------------- |:-------------:| 
  | id      |  Title you'll see in the UserPage navigation |
  | subject      | Must match the name of the section it's inside     |
  | permalink | Where the page will be located. Should in the format ```guide/[_idname_]/   |
  | previous | Where the 'previous' link will navigate to. Should be the page that comes prior to it int he     navigation menu.   |  
  | next | Where the 'previous' link will navigate to. Should be the page that comes prior to it int he navigation menu.   |  

4. Beneath there you can begin to edit or write up your guide. You can view an example of the formatting options at  [electiondata.github.io/guide/example/](electiondata.github.io/guide/example/).

5. Save, and run ```gulp serve```. It should appear on the UserGuide. 

### Adding a Resource to the User Guide

The links to additional resources can be edited inside ```page-aside-content.html``` which you can find in ```app/_includes/```. To add a new one simply create a new ```<li><a href="[link to resource]>[resource name]</a></li>```element along the lines of the rest.

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
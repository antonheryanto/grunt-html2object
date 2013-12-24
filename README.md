# grunt-html2object

> Convert HTML into Javascript Object and used directly in Application

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html2object --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html2object');
```

## The "html2object" task

### Overview
In your project's Gruntfile, add a section named `html2object` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html2object: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.target
Type: `String`
Default value: `'window.$.html'`

A string value that is used to do something with whatever.

#### options.storage
Type: `String`
Default value: `'{}'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options will generate js object to `$.html` from html files in `src`

```js
grunt.initConfig({
  html2object: {
    options: {},
    files: {
      'dest/default_options.js': ['src/**.html'],
    },
  },
});
```

#### Custom Options
In this example, custom options will generate js localStorage to `$.html` from html files in `src`
```js
grunt.initConfig({
  html2object: {
    options: {
      target: 'window.$.html',
      storage: 'window.localStorage',
    },
    files: {
      'dest/custom_options.js': ['src/**.html'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v0.1.0 Initial Release, support basic convertion from html to javascript object

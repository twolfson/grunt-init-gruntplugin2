# grunt-init-gruntplugin2 [![Donate on Gittip](http://badgr.co/gittip/twolfson.png)](https://www.gittip.com/twolfson/)

Standard init:gruntplugin with better test functionality.

Attribution to [grunt-less](https://github.com/jharding/grunt-less) for file structure.

## Getting Started
Install `grunt-init-gruntplugin2` globally and call it from the shell
```shell
sudo npm install -g grunt-init-gruntplugin2
grunt-init-gruntplugin2
```

The `gruntplugin2` template should be added to your grunt userDir (`~/.grunt` for Linux or `%USERPROFILE%` for Windows).

You can now call `grunt init:gruntplugin2` and the init prompt will start.

### Manual Install
Clone the repository, enter the directory, and run `grunt` to install `grunt-init-gruntplugin2`.
```shell
git clone git://github.com/twolfson/grunt-init-gruntplugin2.git
cd grunt-init-gruntplugin2
grunt
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
Aside from the regular set of items provided by `grunt init:gruntplugin`. The following changes have occurred:

- Tests are now run via `npm test`. This executes `grunt` from the command line *within* the test directory.
- Your task is a multiTask by default rather than a task.
- The test will read in a file as specified in `test/grunt.js`, generate one through your task, and test against that.
- `test/actual` is a temporary directory for writing test files to. This is inheritly ignored by `.gitignore`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint your code using [grunt][grunt] and test via `npm test`.

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Todd Wolfson
Licensed under the MIT license.

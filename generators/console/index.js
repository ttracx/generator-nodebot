'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('appname', { type: String, required: true });
    // And you can then access it later on this way; e.g. CamelCased
    // this.appname = _.camelCase(this.appname);

    // Next, add your custom code
    // this.option('console'); // This method adds support for a `--console` flag
  },

  prompting: function () {
    // var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantastic ' + chalk.red('nodebot') + ' generator!'
    ));

    // var prompts = [{
    //   type: 'confirm',
    //   name: 'someAnswer',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    // this.prompt(prompts, function (props) {
    //   this.props = props;
    //   // To access props later use this.props.someAnswer;

    //   done();
    // }.bind(this));
  },

  writing: function () {
     this.fs.copy(
      this.templatePath('app.js'),
      this.destinationPath('app.js')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { appName: this.appname,
        author: "me" }
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      { appName: this.appname,
        author: "me" }
    );
    this.fs.copyTpl(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE'),
      { appName: this.appname,
        author: "me" }
    );
  },

  install: function () {
    // this.installDependencies();
    
    this.npmInstall(['botbuilder'], { 'save': true });

  }
});

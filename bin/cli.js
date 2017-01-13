#! /usr/bin/env node

'use strict'

const program = require('commander');
const mkComponent = require('../dist/make');
const init = require('../dist/init');

program
  .version('0.0.2')    

program
  .command('init [env]')
  .description('initialize bubba.json')
  .action(init);

program
  .command('make-component <filepath>')
  .alias('makeComponent')
  .description('bubba will make components for you')
  .option("-T, --template <template_name>", "Which template to use")
  .action(mkComponent).on('--help', function() {
  	console.log('  Options:');
  	console.log('    -T, --template <template_name> : default, function, class');
  	console.log();
    console.log('  Examples:');
    console.log();
    console.log('    $ bubba make-component Navbar -T class');
    console.log();
  });

program
  .command('*')
  .action(function(env){
    console.log('deploying "%s"', env);
  });

program.parse(process.argv);
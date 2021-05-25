#!/usr/bin/env node
const yargs = require('yargs/yargs')(process.argv.slice(2));

yargs
  .commandDir('bin')
  .demandCommand()  
  .help()
  .argv
;

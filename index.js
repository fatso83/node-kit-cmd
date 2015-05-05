#!/usr/bin/env node
var kit=require('node-kit');
var util=require('util');
var fs = require('fs');

if(process.argv.length !== 4) { 
    console.log(process.argv.length, process.argv);
    console.log( util.format('Usage: node-kit input.kit output.html', process.argv[0]) );
    process.exit(1);
}

var html = kit(process.argv[2]);
fs.writeFileSync(process.argv[3], html);

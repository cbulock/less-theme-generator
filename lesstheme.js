#!/usr/bin/env node

args = process.argv

var theme_loc = '.';
if (args.length > 2) {
 theme_loc = theme_loc + '/' + args[2];
}
theme_loc = theme_loc + '/';

var fs = require('fs');
var sys = require('util');
var exec = require('child_process').exec;

var puts = function(err, stdout, stderr) {
	if (stderr) {
		throw stderr;
	}
	else {
		sys.puts('CSS generated');
	}
}	

dirlist = function(dir) {
	var list = fs.readdirSync(dir);
	var dirlist = [];
	for(var i in list) {
		if (!~list[i].indexOf(".")) dirlist.push(list[i])
	}
	return dirlist;
}

dl = dirlist(theme_loc)

for(var i in dl) {
	exec('lessc --source-map=' + theme_loc + dl[i] + '/' + dl[i] + '.css.map ' + theme_loc + dl[i] + '.less > ' + theme_loc + dl[i] + '/' + dl[i] + '.css', puts);
}

var	fs 	   = require('fs')
  , events = require('events')
  , buffer = require('buffer')
  , http   = require('http')
  , url	   = require('url')
  , path   = require('path');

/*
*Create the Server object.
*/
Server = function(){};

//Exports
exports.Server = Server;
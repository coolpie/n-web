var	fs 	   = require('fs')
  , events = require('events')
  , buffer = require('buffer')
  , http   = require('http')
  , url	   = require('url')
  , path   = require('path');

/*
*  Create the Server object and setting default properties of Server.
*/
Server = function(rootPath,header){
	/*
    *  the default response setting.
    */
    this.root 			= path.normalize(path.resolve(rootPath || '.'));
    this.cache 			= 3600;
    this.defaultHeaders 	= {};

    for(var i in this.defaultHeaders){
    	this.options.headers[k] = header[k] || defaultHeaders[k];
    };
};

/*
*  Start the server.
   @req,res     outter passing request and response.
*/
Server.prototype.engine = function(req,res,callback){



};

//Exports
exports.Server = Server;
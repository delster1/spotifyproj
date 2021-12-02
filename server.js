var Spotify = require('spotify-web-api-js');
var s = new Spotify();
// var spotifyApi = new SpotifyWebApi();
var http = require('http');
const { default: SpotifyWebApi } = require('spotify-web-api-js');

http.createServer(function(request,response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("websites here");
    response.end();
}).listen(8888);


// code if need accesstoken later
    //  spotifyApi.setAccessToken('')

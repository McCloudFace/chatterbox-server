/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/


// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

<<<<<<< HEAD
var requestHandler = function(request, response) {




=======
var requestHandler = function (request, response) {
  console.log('in requestHandler');
>>>>>>> 78232113e0497f394aa9ac4c5d99637daaf9d802
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.

  // The outgoing status.
  var statusCode;
  var messages = {
    results: [{
      username: 'Jono',
      text: 'Do my bidding!'
    }]
  };

  // See the note below about CORS headers.
  var headers = defaultCorsHeaders;

  if (request.url === '/classes/messages') {
    if (request.method === 'GET') {
      statusCode = 200;
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(messages));
    } else if (request.method === 'POST') {
      statusCode = 200;

      // TODO:
      // DOES NOT WORK:
      // let body = [];
      // request.on('data', (chunk) => {
      //   body.push(chunk);
      //   console.log('chunk: ', chunk);
      // }).on('end', () => {
      //   // body = Buffer.concat(body).toString();
      //   //console.log('buffer: ', Buffer);
      // });

      // messages.results.push(request.body);


      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(messages));
    }



    // check type of request
    // if (request.method === 'GET') {
    //   //    Should send back parsable stringified JSON
    //   //    Should send back an object
    //   //    Should send an object containing a `results` array
    //   //    Should respond with messages that were previously posted
    //   const { headers, method, url } = request;


    // Tell the client we are sending them plain text.
    //
    // You will need to change this if you are sending something
    // other than plain text, like JSON or HTML.

    // headers['Content-Type'] = 'text/plain';



    //     const responseBody = { headers, method, url, messages };

    //     console.log('responseBody:', responseBody);

    //     // response.write(JSON.stringify(responseBody));
    //     // response.end();
    //     // Note: the 2 lines above could be replaced with this next one:
    //     response.end(JSON.stringify(responseBody));

    // Make sure to always call response.end() - Node may not send
    // anything back to the client until you do. The string you pass to
    // response.end() will be the body of the response - i.e. what shows
    // up in the browser.
    //
    // Calling .end "flushes" the response's internal buffer, forcing
    // node to actually send all the data over to the client.
    // response.end('Hello, World!');
    // ----------------------------------------------------------------------
  }

  // }
  // }


  console.log('Serving request type ' + request.method + ' for url ' + request.url);
};

module.exports = {
  requestHandler
};

const url = require('url');

// The URL we want to parse (= analyze)
const exampleUrl = '/about?name=Jane&city=Boston';

// Check url.parse's doc for the meaning of parameters
const parsedUrl = url.parse(exampleUrl, true);

// Show the results
console.log(parsedUrl);
console.log('\nParsed query string:');
console.log(parsedUrl.query);

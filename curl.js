const request = require("request");

let curl = function(urls) {
  urls.forEach((url) => {
    request(url, function(error, response, body) {
      if (error) {
        throw error
      }
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body)
    });
  })
  setTimeout(() => {
    process.stdout.write("prompt > ");
  }, 250);
}

module.exports = curl;

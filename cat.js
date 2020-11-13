const fs = require("fs");

const cat = function (done, fileNames) {


fileNames.reduce((acc, fileName, i) => {
    fs.readFile(`./${fileName}`, "utf8", (err, data) => {
      if (err) {
        throw err;
      } else {
        return acc + data.toString();
      }
    });
  }, '')

};

module.exports = cat;

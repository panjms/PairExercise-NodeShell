const fs = require("fs");

const cat = function (fileNames) {
  fileNames.forEach((fileName) => {
    fs.readFile(`./${fileName}`, "utf8", (err, data) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(data.toString());
      }
    });
  });
  setTimeout(() => {
    process.stdout.write("prompt > ");
  }, 5);
};

module.exports = cat;

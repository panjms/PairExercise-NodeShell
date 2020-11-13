const fs = require("fs");

const ls = function (done) {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done(err);
    } else {
      done(files.join("\n"));
    }
  });
};

module.exports = ls;

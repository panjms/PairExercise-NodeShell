const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

process.stdout.write("prompt > ");
const path = require("path");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");
  const cmdScript = cmd[0].toLowerCase();

  if (cmdScript === "pwd") {
    pwd(done);
  } else if (cmdScript === "ls") {
    ls(done);
  } else if (cmdScript === "cat") {
    cat(done,cmd.slice(1));
  } else if (cmdScript === "curl") {
    curl(done, cmd.slice(1));
  } else{
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

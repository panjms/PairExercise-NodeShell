const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");
const path = require("path");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");
  const cmdScript = cmd[0].toLowerCase();

  if (cmdScript === "pwd") {
    pwd();
  } else if (cmdScript === "ls") {
    ls();
  } else if (cmdScript === "cat") {
    cat(cmd.slice(1));
    process.stdout.write("\nprompt > ");
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

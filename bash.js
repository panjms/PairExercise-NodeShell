const pwd = require("./pwd");
const ls = require("./ls");

process.stdout.write("prompt > ");
const path = require("path");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd.toLowerCase() === "pwd") {
    pwd();
  } else if (cmd.toLowerCase() === "ls") {
    ls();
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

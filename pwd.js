const pwd = function () {
  process.stdout.write(`Current directory: ${process.cwd()}`);
  process.stdout.write("\nprompt > ");
};

module.exports = pwd;

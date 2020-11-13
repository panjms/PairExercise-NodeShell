process.stdout.write('prompt > ');
const path = require('path')


process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd.toLowerCase() === 'pwd') {
    process.stdout.write(`Current directory: ${process.cwd()}`);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ')
});

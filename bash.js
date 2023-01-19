//Output a prompt

const {pwd} = require('./pwd.js');
const {ls} = require('./ls.js');
const {cat} = require('./cat.js');

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  if(cmd.slice(0, 4) === 'cat ') cat(cmd.split(' ')[1], done);
  else if(cmd === 'pwd') pwd(done);
  else if(cmd === 'ls') ls(done);
  else done('You typed: ' + cmd);
  
});


const pwd = require("./pwd");
const cat = require("./cat");
const ls = require("./ls");

process.stdout.write("prompt > ");

process.stdin.on("data", (done) => {
  //calls user inputs
  const cmd = data.toString().trim();
  const cmdArr = cmd.split(" ");
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmdArr[0] === "cat") {
    cat(cmdArr[1]);
  } else {
    process.stdout.write(`You typed: ${cmd}`);

  }
});

// function done(output) {
//   module.exports = () => {
//     fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//       throw err;
//     } else {
//       process.stdout.write(files.join('\n'));
//       process.stdout.write('prompt > ');
//     }
//   });
//   process.stdout.write("\nprompt > ");
//   }

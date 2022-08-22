// process.stdout.write('prompt > ');

module.exports = function() {
  // The stdin 'data' event fires after a user types in a line
    const cmd = process.cwd()
    // data.toString().trim(); //remove the newline

    process.stdout.write(cmd);
    process.stdout.write('\nprompt > '); //takes the place of console.log
}



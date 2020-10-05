const argv = require('./config/yargs').argv;
const colors = require('colors/safe')
const { createFile, listTable } = require("./multiply/multiply");

let command = argv._[0];

switch (command) {
  case "list":
    listTable(argv.base, argv.limit)
    break;
  case "create":
    createFile(argv.base, argv.limit)
      .then(file => console.log(`File created: `, colors.green(file)))
      .catch(err => console.log(err));
    break;

  default:
    console.log('Unrecognized command');
}



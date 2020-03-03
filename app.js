const argv = require('./config/yargs').argv;
const colors = require('colors')
const { createFile, listTable } = require("./multiply/multiply");

let command = argv._[0];

switch (command) {
  case "list":
    listTable(argv.base, argv.limit)
      .then(file => console.log(`File created: ${file}`))
      .catch(err => console.log(err));
    break;
  case "create":
    createFile(argv.base, argv.limit)
      .then(file => console.log(`File created: ${file.green}`))
      .catch(err => console.log(err));
    break;

  default:
    console.log('Unrecognized command');
}

console.log(argv);


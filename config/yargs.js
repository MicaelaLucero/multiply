const opts = {
    base: {
        demand: true,
        alias: "b"
      },
      limite: {
        alias: "l",
        default: 10
      }
}

const argv = require("yargs")
  .command("list", "Print the multiplication table on the console", opts)  
  .command("create", "Generates a file with the multiplication table", opts)
  .help()
  .argv;

  module.exports={
      argv
  }
const chalk = require('chalk');
const log = console.log;

exports.hello = function() {
  log(chalk.blue("Hello"), chalk.green("World"), chalk.red("!"));
  log(chalk.black.bgYellow(Date()));
  log();
}

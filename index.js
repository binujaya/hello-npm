const chalk = require('chalk');
const log = console.log;

log(chalk.blue("Hello"), chalk.green("World"), chalk.red("!"));
log(chalk.black.bgYellow(Date()));
log();
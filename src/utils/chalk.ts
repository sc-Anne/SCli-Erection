import chalk from "chalk";

export const Cblue = (text: string) => chalk.blue.underline(text);
export const Cred = (text: string) => chalk.red.bold(text);
export const Cgreen = (text: string) => chalk.green.bgWhite(text);
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var package_json_1 = __importDefault(require("../package.json"));
var _commands_1 = __importDefault(require("./commands"));
var program = new commander_1.Command();
console.log(3456);
program
    .name(package_json_1.default.name)
    .version(package_json_1.default.version)
    .helpOption('-h,--help')
    .usage("<command> [option]");
// .command('choose')
// .description("select an option")
// .action((res) => {
//     console.log(res);       
//     new Inquirer.prompt([
//         {
//             type: "checkbox",
//             message: "choose one",
//             name: "selections",
//             choices: [
//                 new Inquirer.Separator(` = The Meats`),
//                 {
//                     name: "vue"
//                 },
//                 {
//                     name: "react"
//                 },
//                 new Inquirer.Separator(` The Cheeses`),
//                 {
//                     name: "angular",
//                     checked: true
//                 }
//             ],
//             validate(ans) {
//                 if(ans.length < 1) {
//                     return `you must choose at least one`;
//                 }
//                 return true;
//             }
//         }
//     ]).then((res) => {
//         console.log(res)
//     })
// })
// .command("loading")
// .description("loading before act")
// .action(() => {
//     loading.start({
//         color: "yellow",
//         text: "begin",
//         "interval":100,
//         "stream": process.stdout,
//         "frames":["◰", "<", ">", "◱"]
//     });
//     const timer = setTimeout(() => {
//         loading.warn("警告");
//         const timer2 = setTimeout(() => {
//             clearTimeout(timer);
//             loading.info("提示");
//             const timer3 = setTimeout(() => {
//                 clearTimeout(timer2);
//                 loading.stop();
//                 const timer4 = setTimeout(() => {
//                     clearTimeout(timer3);
//                     loading.start("第二次x");
//                     setTimeout(() => {
//                         clearTimeout(timer4);
//                         loading.stop();
//                     }, 1000)
//                 })
//             })
//         })
//     }, 1000)
// })
// .command("chalk")
// .action(() => {
//     console.log(Cblue("blue"));
//     console.log(Cred("red"));
//     console.log(Cgreen("green"));
// })
Object.keys(_commands_1.default).forEach(function (command) {
    var current = program.command(command);
    if (_commands_1.default[command].option && _commands_1.default[command].option.length) {
        _commands_1.default[command].option.forEach(function (item) {
            current.option(item.cmd, item.msg || "");
        });
    }
    current.action(_commands_1.default[command].action);
});
program.parse();

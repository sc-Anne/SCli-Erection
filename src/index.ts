import {Command} from "commander";
import Pack from "../package.json";
import Inquirer from "inquirer";
import {Cblue, Cgreen, Cred, loading} from "@utils";
import Commands from "@commands";

const program = new Command();
console.log(3456)
program
    .name(Pack.name)
    .version(Pack.version)
    .helpOption('-h,--help')
    .usage(`<command> [option]`)
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

    Object.keys(Commands).forEach(command => {
        const current = program.command(command);
        if (Commands[command].option && Commands[command].option.length) {
            Commands[command].option.forEach(item => {
                current.option(item.cmd, item.msg || "");
            })
        }
        current.action(Commands[command].action);
    })
program.parse()


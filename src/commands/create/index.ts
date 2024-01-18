import {Cred, file, loading} from "@utils";
import {exec} from "child_process";
import inquirer from "inquirer";
import { TemplateChoices, TemplateName, TemplatesReport } from "../../constant";
export default async function (projectName, cmd) {
    const curPath = process.cwd() + "\/" + projectName;
    try {
        const exists = await file.readDir(curPath);
        if (cmd.force) {
            exists && await file.rm(curPath);
            await file.mkdir(curPath);
        } else {
            // 下载模版
            if (exists) {
                console.log(Cred("Exists Dir"));
                return;
            }
            await file.mkdir(curPath);
        }
        
        // download-git-repo
        const templatePath = process.cwd() + '/' + TemplateName;
        console.log(templatePath, "templatePath");
        
        if (await file.readDir(templatePath)) {
            console.log("Sun-template is existed! Please remove it!");
            process.exit();
        }
        loading.start("下载模版");
        exec(`git clone ${TemplatesReport}`,async (err, stdout, stderr) => {
            console.log(err, stdout, stderr);
            if (err) {
                console.log(err);
                loading.stop();
                process.abort();
            }
            // const project = await file.readFile(templatePath + '/' + 'project.json');
            console.log(TemplateChoices, "project");
            loading.stop();
            const question = [
                {
                    type: "expand",
                    message: "请选择一个模版",
                    name: "template",
                    default: "react-webpack",
                    choices: TemplateChoices,
                }
            ];
            const {template} = await inquirer.prompt(question);
            const newPath = curPath;
            const oldPath = templatePath + '/' + template;
    
            loading.start("生成模版...");
            const copyRes = await file.copy(oldPath, newPath);
            if (copyRes !== "") {
                loading.stop();
                process.abort();
            }
            await file.rm(templatePath);
            loading.stop();
            console.log(Cred("模版创建成功！"))
        });
    } catch(e) {
        console.log(e);
        loading.stop();
        process.abort();
    }
}
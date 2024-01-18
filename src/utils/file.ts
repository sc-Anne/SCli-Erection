import {rejects} from "assert";
import fs from "fs";
import {Cgreen, Cred} from "./chalk";

export const readDir = (path: string): Promise<any> => new Promise((res, rej) => {
    fs.readdir(path, err => {
        if (!err) res(true);
        res(false);
        // rej(`${Cred("Not exists dir")} ${typeof err === "string" ? err : JSON.stringify(err)}`)
    })
})

export const mkdir = (path: string) => new Promise((res, rej) => {
    fs.mkdir(path, err => {
        if (!err) res("");
        rej(`${Cred("Can not make dir")} ${typeof err === "string" ? err : JSON.stringify(err)}`)
    })
})

export const rm = (path: string) => new Promise((res, rej) => {
    fs.rmdir(path, {recursive: true}, err => {
        if (!err) res("");
        rej(`${Cred("Can not remove" + path + "")} ${typeof err === "string" ? err : JSON.stringify(err)}`)
    })
})

export const readFile = (path: string) : Promise<string> => new Promise((res, rej) => {
    fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
        if (err) rej(`${Cred("Can not read" + path + "")} ${typeof err === "string" ? err : JSON.stringify(err)}`)
        res(data);
    })
})

export const copy = (oldPath: string, newPath: string) => new Promise((res, rej) => {
    // fs.copyFile(oldPath, newPath, err => {
    //     console.log(Cgreen(oldPath));
    //     if (!err) res("");
    //     rej(`${Cred("Can not copy" + oldPath + "")} \n ${typeof err === "string" ? err : JSON.stringify(err)}`)
    // })

    fs.cp(oldPath, newPath, {recursive: true}, err => {
        if (!err) res("");
        rej(`${Cred("Can not copy" + oldPath + "")} \n ${typeof err === "string" ? err : JSON.stringify(err)}`)
    })
})
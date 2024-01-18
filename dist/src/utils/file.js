"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copy = exports.readFile = exports.rm = exports.mkdir = exports.readDir = void 0;
var fs_1 = __importDefault(require("fs"));
var chalk_1 = require("./chalk");
var readDir = function (path) { return new Promise(function (res, rej) {
    fs_1.default.readdir(path, function (err) {
        if (!err)
            res(true);
        res(false);
        // rej(`${Cred("Not exists dir")} ${typeof err === "string" ? err : JSON.stringify(err)}`)
    });
}); };
exports.readDir = readDir;
var mkdir = function (path) { return new Promise(function (res, rej) {
    fs_1.default.mkdir(path, function (err) {
        if (!err)
            res("");
        rej("".concat((0, chalk_1.Cred)("Can not make dir"), " ").concat(typeof err === "string" ? err : JSON.stringify(err)));
    });
}); };
exports.mkdir = mkdir;
var rm = function (path) { return new Promise(function (res, rej) {
    fs_1.default.rmdir(path, { recursive: true }, function (err) {
        if (!err)
            res("");
        rej("".concat((0, chalk_1.Cred)("Can not remove" + path + ""), " ").concat(typeof err === "string" ? err : JSON.stringify(err)));
    });
}); };
exports.rm = rm;
var readFile = function (path) { return new Promise(function (res, rej) {
    fs_1.default.readFile(path, { encoding: "utf-8" }, function (err, data) {
        if (err)
            rej("".concat((0, chalk_1.Cred)("Can not read" + path + ""), " ").concat(typeof err === "string" ? err : JSON.stringify(err)));
        res(data);
    });
}); };
exports.readFile = readFile;
var copy = function (oldPath, newPath) { return new Promise(function (res, rej) {
    // fs.copyFile(oldPath, newPath, err => {
    //     console.log(Cgreen(oldPath));
    //     if (!err) res("");
    //     rej(`${Cred("Can not copy" + oldPath + "")} \n ${typeof err === "string" ? err : JSON.stringify(err)}`)
    // })
    fs_1.default.cp(oldPath, newPath, { recursive: true }, function (err) {
        if (!err)
            res("");
        rej("".concat((0, chalk_1.Cred)("Can not copy" + oldPath + ""), " \n ").concat(typeof err === "string" ? err : JSON.stringify(err)));
    });
}); };
exports.copy = copy;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = __importDefault(require("./create"));
var commands = {
    "create <project-name>": {
        description: "create a project",
        option: [{
                cmd: "-f, --force",
                msg: "overwrite target directory if it exists"
            }],
        action: create_1.default
    }
};
exports.default = commands;

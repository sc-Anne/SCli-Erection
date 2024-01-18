"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cgreen = exports.Cred = exports.Cblue = void 0;
var chalk_1 = __importDefault(require("chalk"));
var Cblue = function (text) { return chalk_1.default.blue.underline(text); };
exports.Cblue = Cblue;
var Cred = function (text) { return chalk_1.default.red.bold(text); };
exports.Cred = Cred;
var Cgreen = function (text) { return chalk_1.default.green.bgWhite(text); };
exports.Cgreen = Cgreen;

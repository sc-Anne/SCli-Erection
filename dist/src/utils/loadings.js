"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loading_cli_1 = __importDefault(require("loading-cli"));
var Load = /** @class */ (function () {
    function Load() {
        this.load = null;
    }
    Load.prototype.start = function (options) {
        (!this.load && (this.load = (0, loading_cli_1.default)(options).start())) ||
            (this.load && this.load.start(options));
    };
    Load.prototype.stop = function () {
        this.load && this.load.stop();
    };
    Load.prototype.warn = function (text) {
        this.load && this.load.warn(text);
    };
    Load.prototype.info = function (text) {
        this.load && this.load.info(text);
    };
    return Load;
}());
exports.default = new Load();

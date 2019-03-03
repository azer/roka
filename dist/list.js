"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css_1 = require("./css");
function list(rows, options) {
    css_1.map(rows, options, {
        style: "list-style"
    });
}
exports.default = list;

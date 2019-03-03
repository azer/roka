"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css_1 = require("./css");
function grid(rows, options) {
    rows.set("display", "grid");
    css_1.map(rows, options, {
        columns: "grid-template-columns",
        rows: "grid-template-rows",
        align: "align-items",
        justify: "justify-items"
    });
}
exports.default = grid;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css_1 = require("./css");
function box(rows, options) {
    if (options.flex) {
        rows.set("display", "flex");
    }
    if (options.inline) {
        rows.set("display", "inline");
    }
    if (options.block) {
        rows.set("display", "block");
    }
    if (options.inlineBlock) {
        rows.set("display", "inline-block");
    }
    css_1.map(rows, options, {
        width: "width",
        height: "height",
        minWidth: "min-width",
        minHeight: "min-height",
        overflow: "overflow"
    });
}
exports.default = box;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css_1 = require("./css");
function position(rows, options) {
    if (options.absolute) {
        rows.set("position", "absolute");
    }
    else if (options.relative) {
        rows.set("position", "relative");
    }
    else if (options.fixed) {
        rows.set("position", "fixed");
    }
    else if (options.sticky) {
        rows.set("position", "sticky");
    }
    css_1.map(rows, options, {
        top: "top",
        bottom: "bottom",
        left: "left",
        right: "right"
    });
}
exports.default = position;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css_1 = require("./css");
function type(rows, options) {
    if (options.uppercase) {
        rows.set("text-transform", "uppercase");
    }
    else if (options.lowercase) {
        rows.set("text-transform", "lowercase");
    }
    else if (options.capitalize) {
        rows.set("text-transform", "capitalize");
    }
    if (options.ellipsis) {
        rows.set("white-space", "nowrap");
        rows.set("overflow", "hidden");
        rows.set("text-overflow", "ellipsis");
    }
    if (options.family) {
        rows.set("font-family", "'" + options.family.join("','") + "'");
    }
    if (options.nodecoration) {
        rows.set("text-decoration", "none");
    }
    css_1.map(rows, options, {
        align: "text-align",
        color: "color",
        height: "line-height",
        line: "line-height",
        letterSpacing: "letter-spacing",
        size: "font-size",
        weight: "font-weight"
    });
}
exports.default = type;

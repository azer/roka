"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css_1 = require("./css");
function bg(rows, options) {
    if (options.image) {
        options.image = `url(${options.image})`;
    }
    if (options.transparent) {
        options.color = "transparent";
    }
    if (options.cover) {
        options.size = "cover";
    }
    if (options.contain) {
        options.size = "contain";
    }
    if (options.center) {
        options.position = "center";
    }
    if (options.norepeat) {
        options.repeat = "no-repeat";
    }
    css_1.map(rows, options, {
        image: "background-image",
        color: "background-color",
        repeat: "background-repeat",
        size: "background-size",
        position: "background-position"
    });
}
exports.default = bg;

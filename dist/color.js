"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function color(rows, options) {
    if (options.bg) {
        rows.set("background-color", options.bg);
    }
    if (options.fg) {
        rows.set("color", options.fg);
    }
    if (options.fill) {
        rows.set("fill", options.fill);
    }
}
exports.default = color;

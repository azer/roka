"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function border(rows, options) {
    for (const key in options) {
        if (key === "around") {
            rows.set("border", options[key]);
        }
        else {
            rows.set("border-" + key, options[key]);
        }
    }
}
exports.default = border;

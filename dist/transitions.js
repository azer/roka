"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setTransitions(rows, transitions) {
    setTransition(rows, transitions.map(define).join(", "));
}
exports.default = setTransitions;
function setTransition(rows, definition) {
    rows.set("-webkit-transition", definition);
    rows.set("-moz-transition", definition);
    rows.set("-o-transition", definition);
    rows.set("transition", definition);
}
function define(options) {
    return `${options.prop || ""} ${options.duration}s ${options.fn} ${options.delay || ""}`.trim();
}
exports.define = define;

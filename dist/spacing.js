"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css_1 = require("./css");
function spacing(rows, options) {
    css_1.map(rows, options, {
        column: "grid-column-gap",
        columns: "grid-column-gap",
        inner: "padding",
        innerBottom: "padding-bottom",
        innerLeft: "padding-left",
        innerRight: "padding-right",
        innerTop: "padding-top",
        outer: "margin",
        around: "margin",
        outerBottom: "margin-bottom",
        outerLeft: "margin-left",
        outerRight: "margin-right",
        outerTop: "margin-top",
        top: "margin-top",
        right: "margin-right",
        bottom: "margin-bottom",
        left: "margin-left",
        row: "grid-row-gap"
    });
}
exports.default = spacing;

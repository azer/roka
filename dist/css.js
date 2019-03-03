"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(rows, values, cssKeys) {
    for (const key in values) {
        if (cssKeys[key]) {
            rows.set(cssKeys[key], values[key]);
        }
    }
}
exports.map = map;
function override(a, b) {
    const result = {};
    for (const key in a) {
        result[key] = a[key];
    }
    for (const key in b) {
        result[key] = b[key];
    }
    return result;
}
exports.override = override;

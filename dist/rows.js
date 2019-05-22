"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEnabledFor = {
    transform: true
};
class Rows {
    constructor() {
        this.raw = {
            "box-sizing": "border-box"
        };
    }
    compile() {
        const result = {};
        for (const key in this.raw) {
            if (this.raw[key] instanceof Rows) {
                result[key] = this.raw[key].compile();
            }
            else if (Array.isArray(this.raw[key])) {
                result[key] = this.raw[key].join(" ");
            }
            else {
                result[key] = this.raw[key];
            }
        }
        return result;
    }
    concat(rows) {
        this.raw = Object.assign({}, this.raw, rows.raw);
    }
    set(key, value) {
        if (!exports.listEnabledFor[key]) {
            this.raw[key] = value;
            return;
        }
        if (!this.raw[key]) {
            this.raw[key] = [];
        }
        ;
        this.raw[key].push(value);
    }
}
exports.default = Rows;

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
        const rows = [];
        for (const key in this.raw) {
            if (this.raw[key] instanceof Rows) {
                rows.push(`  ${key} {
  ${this.raw[key].compile()}
}`);
            }
            else if (Array.isArray(this.raw[key])) {
                rows.push(`${key}: ${this.raw[key].join(" ")};`);
            }
            else {
                rows.push(`  ${key}: ${this.raw[key]};`);
            }
        }
        return rows.join("\n");
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

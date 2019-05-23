"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEnabledFor = {
    transform: true
};
class Rows {
    constructor() {
        this.raw = [
            {
                key: "box-sizing",
                value: "border-box"
            }
        ];
    }
    compile(props, _result) {
        let result = Object.assign({}, _result);
        let i = -1;
        const len = this.raw.length;
        while (++i < len) {
            if (this.raw[i].condfn && !this.raw[i].condfn(props)) {
                continue;
            }
            let key = this.raw[i].key;
            let value = this.raw[i].value;
            if (value instanceof Rows) {
                if (typeof key !== "undefined") {
                    result[key] = value.compile(props);
                }
                else {
                    result = value.compile(props, result);
                }
            }
            else if (typeof value === "function") {
                if (typeof key !== "undefined") {
                    result[key] = value(props).compile(props);
                }
                else {
                    result = value(props).compile(props, result);
                }
            }
            else if (Array.isArray(value)) {
                result[key] = value.join(" ");
            }
            else {
                result[key] = value;
            }
        }
        return result;
    }
    concat(rows) {
        this.raw = this.raw.concat(rows.raw);
    }
    add(property) {
        this.raw.push(property);
    }
    set(key, value) {
        // Properties like `transform` contains space-separated multiple values.
        // `set` might get called multiple times for one transform, so we need to group them together.
        if (!exports.listEnabledFor[key]) {
            this.raw.push({ key, value });
            return;
        }
        const existing = this.raw.find(row => row.key === key);
        if (existing) {
            ;
            existing.value.push(value);
            return;
        }
        this.raw.push({ key, value: [value] });
    }
}
exports.default = Rows;

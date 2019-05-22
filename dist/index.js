"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import styled, { css as _css, StyledComponentClass } from "styled-components"
const react_1 = require("react");
const emotion_1 = require("emotion");
const color_1 = require("./color");
const css_1 = require("./css");
const spacing_1 = require("./spacing");
const grid_1 = require("./grid");
const position_1 = require("./position");
const rows_1 = require("./rows");
const type_1 = require("./type");
const border_1 = require("./border");
const box_1 = require("./box");
const list_1 = require("./list");
const transitions_1 = require("./transitions");
const bg_1 = require("./bg");
class Roka {
    constructor() {
        this.rows = new rows_1.default();
        this.conditions = [];
        this.withFns = [];
    }
    absolute(options) {
        position_1.default(this.rows, css_1.override(options || {}, {
            absolute: true
        }));
        return this;
    }
    back() {
        return this.depth({ back: true });
    }
    bg(options) {
        bg_1.default(this.rows, options);
        return this;
    }
    block(options) {
        box_1.default(this.rows, css_1.override(options || {}, {
            block: true
        }));
        return this;
    }
    border(options) {
        border_1.default(this.rows, options);
        return this;
    }
    center() {
        this.rows.set("display", "flex");
        this.rows.set("align-items", "center");
        this.rows.set("justify-content", "center");
        return this;
    }
    circle() {
        return this.border({ radius: "100%" });
    }
    clone() {
        const clone = new Roka();
        clone.conditions = this.conditions.slice();
        clone.rows.raw = Object.assign({}, this.rows.raw);
        clone.withFns = this.withFns.slice();
        return clone;
    }
    color(options) {
        color_1.default(this.rows, options);
        return this;
    }
    cond(fn, style) {
        this.conditions.push({ fn, style });
        return this;
    }
    content(text) {
        this.rows.set("content", `"${text}"`);
        return this;
    }
    cover(image) {
        this.bg({ image, cover: true });
        return this;
    }
    css() {
        return emotion_1.css(this.rows.compile());
    }
    depth(options) {
        if (options.front) {
            this.rows.set("z-index", "9999999");
        }
        if (options.back) {
            this.rows.set("z-index", "-1");
        }
        if (options.hasOwnProperty("index")) {
            this.rows.set("z-index", String(options.index));
        }
        return this;
    }
    easein(time, props) {
        this.transitions("ease-in", time, props);
        return this;
    }
    easeout(time, props) {
        this.transitions("ease-out", time, props);
        return this;
    }
    element(tag) {
        return props => {
            this.conditions
                .filter(c => c.fn(props))
                .forEach(c => this.rows.concat(c.style.rows));
            this.withFns
                .map(withFn => withFn(props))
                .forEach(w => this.rows.concat(w.rows));
            return react_1.createElement(tag || "div", { className: this.css() }, props.children);
        };
        /*// @ts-ignore
        return styled(tag || "div")([this.rows.compile()], props => {
    
    
            .join("\n")
    
          return s
        })*/
    }
    fg(colorCode) {
        this.color({ fg: colorCode });
        return this;
    }
    fixed(options) {
        position_1.default(this.rows, css_1.override(options || {}, {
            fixed: true
        }));
        return this;
    }
    front() {
        return this.depth({ front: true });
    }
    grid(options) {
        grid_1.default(this.rows, options || {});
        return this;
    }
    inline(options) {
        box_1.default(this.rows, css_1.override(options || {}, {
            inline: true
        }));
        return this;
    }
    inlineBlock(options) {
        box_1.default(this.rows, css_1.override(options || {}, {
            inlineBlock: true
        }));
        return this;
    }
    list(options) {
        list_1.default(this.rows, options);
        return this;
    }
    mono(options) {
        type_1.default(this.rows, css_1.override(options || {}, {
            family: [
                "Menlo",
                "Inconsolata",
                "Fira Mono",
                "Noto Mono",
                "Droid Sans Mono",
                "Consolas",
                "monaco",
                "monospace"
            ]
        }));
        return this;
    }
    noborders() {
        return this.border({ around: "0px" });
    }
    nooutline() {
        this.rows.set("outline", "none");
        return this;
    }
    nooverflow() {
        this.rows.set("overflow", "hidden");
        return this;
    }
    pointer() {
        this.rows.set("cursor", "pointer");
        return this;
    }
    rotate(degree) {
        this.rows.set("transform", `rotate(${degree}deg)`);
        return this;
    }
    round(radius) {
        return this.border({ radius });
    }
    relative(options) {
        position_1.default(this.rows, css_1.override(options || {}, {
            relative: true
        }));
        return this;
    }
    sans(options) {
        type_1.default(this.rows, css_1.override(options || {}, {
            family: [
                "-apple-system",
                "BlinkMacSystemTypography",
                "Segoe UI",
                "Roboto",
                "Oxygen",
                "Ubuntu",
                "Cantarell",
                "Fira Sans",
                "Droid Sans",
                "Helvetica Neue",
                "sans-serif"
            ]
        }));
        return this;
    }
    scale(...values) {
        this.rows.set("transform", `scale(${values.join(", ")})`);
        return this;
    }
    select(selector, roka) {
        this.rows.set(selector, roka.rows);
        return this;
    }
    serif(options) {
        type_1.default(this.rows, css_1.override(options, {
            family: [
                "Apple Garamond",
                "Baskerville",
                "Times New Roman",
                "Droid Serif",
                "Times",
                "Source Serif Pro",
                "serif"
            ]
        }));
        return this;
    }
    set(property, value) {
        this.rows.set(property, value);
        return this;
    }
    shadow(opacity) {
        if (typeof opacity === "undefined") {
            opacity = 0.15;
        }
        this.rows.set("box-shadow", `0 1px 3px 0 rgba(0,0,0,${opacity})`);
        return this;
    }
    size(options) {
        box_1.default(this.rows, options);
        return this;
    }
    spacing(options) {
        spacing_1.default(this.rows, options);
        return this;
    }
    sticky(options) {
        position_1.default(this.rows, css_1.override(options || {}, {
            sticky: true
        }));
        return this;
    }
    stretch(options) {
        box_1.default(this.rows, css_1.override(options || {}, {
            width: "100%",
            height: "100%"
        }));
        return this;
    }
    transition(options) {
        transitions_1.default(this.rows, [options]);
        return this;
    }
    transitions(timingFn, duration, props) {
        if (!Array.isArray(props)) {
            return this.transition({ fn: timingFn, duration });
        }
        transitions_1.default(this.rows, props.map(prop => {
            return {
                fn: timingFn,
                duration,
                prop
            };
        }));
        return this;
    }
    uppercase(options) {
        type_1.default(this.rows, css_1.override(options || {}, { uppercase: true }));
        return this;
    }
    text(options) {
        type_1.default(this.rows, options);
        return this;
    }
    transparent() {
        this.rows.set("background", "transparent");
        return this;
    }
    with(fn) {
        this.withFns.push(fn);
        return this;
    }
}
exports.default = () => {
    return new Roka();
};

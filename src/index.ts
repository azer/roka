//import styled, { css as _css, StyledComponentClass } from "styled-components"
import { createElement } from "react"
import { css } from "emotion"
import color, { IOptions as ColorOptions } from "./color"
import { override } from "./css"
import setSpacing, { IOptions as SpacingOptions } from "./spacing"
import grid, { IOptions as GridOptions } from "./grid"
import position, { IOptions as PositionOptions } from "./position"
import Rows from "./rows"
import setType, { IOptions as TypeOptions } from "./type"
import setBorder, { IOptions as BorderOptions } from "./border"
import box, { IOptions as BoxOptions } from "./box"
import setList, { IOptions as ListOptions } from "./list"
import setTransitions, { ITransition } from "./transitions"
import setBackground, { IOptions as BackgroundOptions } from "./bg"

type ICondFn = (props: { [name: string]: any }) => boolean
type IWithFn = (props: { [name: string]: any }) => Roka

interface ICondition {
  fn: ICondFn
  style: Roka
}

class Roka {
  rows: Rows
  conditions: ICondition[]
  withFns: IWithFn[]
  constructor() {
    this.rows = new Rows()
    this.conditions = []
    this.withFns = []
  }

  absolute(options?: PositionOptions): Roka {
    position(this.rows, override(options || {}, {
      absolute: true
    }) as PositionOptions)
    return this
  }

  back(): Roka {
    return this.depth({ back: true })
  }

  bg(options: BackgroundOptions): Roka {
    setBackground(this.rows, options)
    return this
  }

  block(options?: BoxOptions): Roka {
    box(
      this.rows,
      override(options || {}, {
        block: true
      })
    )
    return this
  }

  border(options: BorderOptions): Roka {
    setBorder(this.rows, options)
    return this
  }

  center(): Roka {
    this.rows.set("display", "flex")
    this.rows.set("align-items", "center")
    this.rows.set("justify-content", "center")

    return this
  }

  circle(): Roka {
    return this.border({ radius: "100%" })
  }

  clone(): Roka {
    const clone = new Roka()
    clone.conditions = this.conditions.slice()
    clone.rows.raw = Object.assign({}, this.rows.raw)
    clone.withFns = this.withFns.slice()
    return clone
  }

  color(options: ColorOptions): Roka {
    color(this.rows, options)
    return this
  }

  cond(fn: ICondFn, style: Roka): Roka {
    this.conditions.push({ fn, style })
    return this
  }

  content(text: string): Roka {
    this.rows.set("content", `"${text}"`)
    return this
  }

  cover(image: string): Roka {
    this.bg({ image, cover: true })
    return this
  }

  css() {
    console.log("final css:", this.rows.compile())
    return css(this.rows.compile())
  }

  depth(options: { front?: boolean; back?: boolean; index?: number }): Roka {
    if (options.front) {
      this.rows.set("z-index", "9999999")
    }

    if (options.back) {
      this.rows.set("z-index", "-1")
    }

    if (options.hasOwnProperty("index")) {
      this.rows.set("z-index", String(options.index))
    }

    return this
  }

  easein(time: number, props?: string[]): Roka {
    this.transitions("ease-in", time, props)
    return this
  }

  easeout(time: number, props?: string[]): Roka {
    this.transitions("ease-out", time, props)
    return this
  }

  element(tag?: string) {
    return props => {
      this.conditions
        .filter(c => c.fn(props))
        .forEach(c => this.rows.concat(c.style.rows))

      this.withFns
        .map(withFn => withFn(props))
        .forEach(w => this.rows.concat(w.rows))

      return createElement(
        tag || "div",
        { className: this.css() },
        props.children
      )
    }

    /*// @ts-ignore
    return styled(tag || "div")([this.rows.compile()], props => {


        .join("\n")

      return s
    })*/
  }

  fg(colorCode: string): Roka {
    this.color({ fg: colorCode })
    return this
  }

  fixed(options?: PositionOptions): Roka {
    position(this.rows, override(options || {}, {
      fixed: true
    }) as PositionOptions)
    return this
  }

  front(): Roka {
    return this.depth({ front: true })
  }

  grid(options?: GridOptions): Roka {
    grid(this.rows, options || {})
    return this
  }

  inline(options?: BoxOptions): Roka {
    box(
      this.rows,
      override(options || {}, {
        inline: true
      })
    )
    return this
  }

  inlineBlock(options?: BoxOptions): Roka {
    box(
      this.rows,
      override(options || {}, {
        inlineBlock: true
      })
    )
    return this
  }

  list(options: ListOptions): Roka {
    setList(this.rows, options)
    return this
  }

  mono(options?: TypeOptions): Roka {
    setType(
      this.rows,
      override(options || {}, {
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
      })
    )

    return this
  }

  noborders(): Roka {
    return this.border({ around: "0px" })
  }

  nooutline(): Roka {
    this.rows.set("outline", "none")
    return this
  }

  nooverflow(): Roka {
    this.rows.set("overflow", "hidden")
    return this
  }

  pointer(): Roka {
    this.rows.set("cursor", "pointer")
    return this
  }

  rotate(degree: number): Roka {
    this.rows.set("transform", `rotate(${degree}deg)`)
    return this
  }

  round(radius: string): Roka {
    return this.border({ radius })
  }

  relative(options?: PositionOptions): Roka {
    position(this.rows, override(options || {}, {
      relative: true
    }) as PositionOptions)
    return this
  }

  sans(options?: TypeOptions): Roka {
    setType(
      this.rows,
      override(options || {}, {
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
      })
    )

    return this
  }

  scale(...values: number[]): Roka {
    this.rows.set("transform", `scale(${values.join(", ")})`)
    return this
  }

  select(selector: string, roka: Roka): Roka {
    this.rows.set(selector, roka.rows)
    return this
  }

  serif(options: TypeOptions): Roka {
    setType(
      this.rows,
      override(options, {
        family: [
          "Apple Garamond",
          "Baskerville",
          "Times New Roman",
          "Droid Serif",
          "Times",
          "Source Serif Pro",
          "serif"
        ]
      })
    )

    return this
  }

  set(property: string, value: string): Roka {
    this.rows.set(property, value)
    return this
  }

  shadow(opacity?: number): Roka {
    if (typeof opacity === "undefined") {
      opacity = 0.15
    }

    this.rows.set("box-shadow", `0 1px 3px 0 rgba(0,0,0,${opacity})`)

    return this
  }

  size(options: BoxOptions): Roka {
    box(this.rows, options)
    return this
  }

  spacing(options: SpacingOptions): Roka {
    setSpacing(this.rows, options)
    return this
  }

  sticky(options?: PositionOptions): Roka {
    position(this.rows, override(options || {}, {
      sticky: true
    }) as PositionOptions)
    return this
  }

  stretch(options?: BoxOptions): Roka {
    box(
      this.rows,
      override(options || {}, {
        width: "100%",
        height: "100%"
      })
    )

    return this
  }

  transition(options: ITransition): Roka {
    setTransitions(this.rows, [options])
    return this
  }

  transitions(timingFn: string, duration: number, props?: string[]): Roka {
    if (!Array.isArray(props)) {
      return this.transition({ fn: timingFn, duration })
    }

    setTransitions(
      this.rows,
      props.map(prop => {
        return {
          fn: timingFn,
          duration,
          prop
        }
      })
    )
    return this
  }

  uppercase(options?: TypeOptions): Roka {
    setType(this.rows, override(options || {}, { uppercase: true }))
    return this
  }

  text(options: TypeOptions): Roka {
    setType(this.rows, options)
    return this
  }

  transparent(): Roka {
    this.rows.set("background", "transparent")
    return this
  }

  with(fn: IWithFn): Roka {
    this.withFns.push(fn)
    return this
  }
}

export default () => {
  return new Roka()
}

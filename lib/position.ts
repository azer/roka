import Rows from "./rows"
import { map } from "./css"

export interface IOptions {
  absolute?: boolean
  relative?: boolean
  fixed?: boolean
  sticky?: boolean
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export default function position(rows: Rows, options: IOptions) {
  if (options.absolute) {
    rows.set("position", "absolute")
  } else if (options.relative) {
    rows.set("position", "relative")
  } else if (options.fixed) {
    rows.set("position", "fixed")
  } else if (options.sticky) {
    rows.set("position", "sticky")
  }

  map(rows, options, {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right"
  })
}

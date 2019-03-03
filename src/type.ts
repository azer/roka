import { map } from "./css"
import Rows from "./rows"

export interface IOptions {
  align?: string
  family?: string[]
  size?: string
  weight?: string
  height?: string
  line?: string
  letterSpacing?: string
  color?: string
  uppercase?: boolean
  lowercase?: boolean
  capitalize?: boolean
  ellipsis?: boolean
  nodecoration?: boolean
}

export default function type(rows: Rows, options: IOptions) {
  if (options.uppercase) {
    rows.set("text-transform", "uppercase")
  } else if (options.lowercase) {
    rows.set("text-transform", "lowercase")
  } else if (options.capitalize) {
    rows.set("text-transform", "capitalize")
  }

  if (options.ellipsis) {
    rows.set("white-space", "nowrap")
    rows.set("overflow", "hidden")
    rows.set("text-overflow", "ellipsis")
  }

  if (options.family) {
    rows.set("font-family", "'" + options.family.join("','") + "'")
  }

  if (options.nodecoration) {
    rows.set("text-decoration", "none")
  }

  map(rows, options, {
    align: "text-align",
    color: "color",
    height: "line-height",
    line: "line-height",
    letterSpacing: "letter-spacing",
    size: "font-size",
    weight: "font-weight"
  })
}

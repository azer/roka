import Rows from "./rows"
import { map } from "./css"

export interface IOptions {
  flex?: boolean
  block?: boolean
  inlineBlock?: boolean
  inline?: boolean
  height?: string
  width?: string
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
  overflow?: string
}

export default function box(rows: Rows, options: IOptions) {
  if (options.flex) {
    rows.set("display", "flex")
  }

  if (options.inline) {
    rows.set("display", "inline")
  }

  if (options.block) {
    rows.set("display", "block")
  }

  if (options.inlineBlock) {
    rows.set("display", "inline-block")
  }

  map(rows, options, {
    width: "width",
    height: "height",
    minWidth: "min-width",
    minHeight: "min-height",
    overflow: "overflow"
  })
}

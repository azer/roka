import { map } from "./css"
import Rows from "./rows"

export interface IOptions {
  column?: string
  columns?: string
  inner?: string
  innerTop?: string
  innerRight?: string
  innerBottom?: string
  innerLeft?: string
  outer?: string
  outerTop?: string
  outerRight?: string
  outerBottom?: string
  outerLeft?: string
  left?: string
  right?: string
  top?: string
  bottom?: string
  row?: string
  around?: string
}

export default function spacing(rows: Rows, options: IOptions) {
  map(rows, options, {
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
  })
}

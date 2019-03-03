import Rows from "./rows"
import { map } from "./css"

export interface IOptions {
  columns?: string
  rows?: string
  align?: string
  justify?: string
}

export default function grid(rows: Rows, options: IOptions) {
  rows.set("display", "grid")

  map(rows, options, {
    columns: "grid-template-columns",
    rows: "grid-template-rows",
    align: "align-items",
    justify: "justify-items"
  })
}

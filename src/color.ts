import Rows from "./rows"

export interface IOptions {
  bg?: string
  fg?: string
  fill?: string
}

export default function color(rows: Rows, options: IOptions) {
  if (options.bg) {
    rows.set("background-color", options.bg)
  }

  if (options.fg) {
    rows.set("color", options.fg)
  }

  if (options.fill) {
    rows.set("fill", options.fill)
  }
}

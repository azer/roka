import Rows from "./rows"

export interface IOptions {
  top?: string
  left?: string
  right?: string
  radius?: string
  bottom?: string
  around?: string
  color?: string
}

export default function border(rows: Rows, options: IOptions) {
  for (const key in options) {
    if (key === "around") {
      rows.set("border", options[key] as string)
    } else {
      rows.set("border-" + key, options[key] as string)
    }
  }
}

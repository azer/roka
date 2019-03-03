import Rows from "./rows"
import { map } from "./css"

export interface IOptions {
  style: string
}

export default function list(rows: Rows, options: IOptions) {
  map(rows, options, {
    style: "list-style"
  })
}

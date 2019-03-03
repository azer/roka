import Rows from "./rows"

export interface ITransition {
  fn: string
  duration: number
  prop?: string
  delay?: string
}

export default function setTransitions(rows: Rows, transitions: ITransition[]) {
  setTransition(rows, transitions.map(define).join(", "))
}

function setTransition(rows: Rows, definition: string) {
  rows.set("-webkit-transition", definition)
  rows.set("-moz-transition", definition)
  rows.set("-o-transition", definition)
  rows.set("transition", definition)
}

export function define(options: ITransition): string {
  return `${options.prop || ""} ${options.duration}s ${
    options.fn
  } ${options.delay || ""}`.trim()
}

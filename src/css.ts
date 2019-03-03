import Rows from "./rows"

export function map(rows: Rows, values: object, cssKeys: object) {
  for (const key in values) {
    if (cssKeys[key]) {
      rows.set(cssKeys[key], values[key])
    }
  }
}

export function override(a: object, b: object): object {
  const result = {}

  for (const key in a) {
    result[key] = a[key]
  }

  for (const key in b) {
    result[key] = b[key]
  }

  return result
}

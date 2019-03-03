export const listEnabledFor: { [prop: string]: boolean } = {
  transform: true
}

export default class Rows {
  raw: { [key: string]: string | string[] | Rows }
  constructor() {
    this.raw = {
      "box-sizing": "border-box"
    }
  }

  compile(): string {
    const rows: string[] = []

    for (const key in this.raw) {
      if (this.raw[key] instanceof Rows) {
        rows.push(`  ${key} {
  ${(this.raw[key] as Rows).compile()}
}`)
      } else if (Array.isArray(this.raw[key])) {
        rows.push(`${key}: ${(this.raw[key] as string[]).join(" ")};`)
      } else {
        rows.push(`  ${key}: ${this.raw[key]};`)
      }
    }

    return rows.join("\n")
  }

  set(key: string, value: string | Rows) {
    if (!listEnabledFor[key]) {
      this.raw[key] = value
      return
    }

    if (!this.raw[key]) {
      this.raw[key] = []
    }

    ;(this.raw[key] as string[]).push(value as string)
  }
}

interface EmotionCSS {
  [key: string]: string | EmotionCSS
}

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

  compile(): EmotionCSS {
    const result: EmotionCSS = {}

    for (const key in this.raw) {
      if (this.raw[key] instanceof Rows) {
        result[key] = (this.raw[key] as Rows).compile()
      } else if (Array.isArray(this.raw[key])) {
        result[key] = (this.raw[key] as string[]).join(" ")
      } else {
        result[key] = this.raw[key] as string
      }
    }

    return result
  }

  concat(rows: Rows) {
    this.raw = {
      ...this.raw,
      ...rows.raw
    }
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

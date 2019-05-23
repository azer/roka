interface IEmotionCSS {
  [key: string]: string | IEmotionCSS
}

export type ICondFn = (props: { [name: string]: any }) => boolean
export type IPropFn = (props: { [name: string]: any }) => Rows

export interface IProperty {
  condfn?: ICondFn
  key?: string
  value?: string | string[] | Rows | IPropFn
}

export const listEnabledFor: { [prop: string]: boolean } = {
  transform: true
}

export default class Rows {
  raw: IProperty[]
  constructor() {
    this.raw = [
      {
        key: "box-sizing",
        value: "border-box"
      }
    ] as IProperty[]
  }

  compile(props: { [name: string]: any }, _result?: IEmotionCSS): IEmotionCSS {
    let result: IEmotionCSS = {
      ..._result
    }

    let i = -1
    const len = this.raw.length
    while (++i < len) {
      if (this.raw[i].condfn && !this.raw[i].condfn(props)) {
        continue
      }

      let key = this.raw[i].key
      let value = this.raw[i].value

      if (value instanceof Rows) {
        if (typeof key !== "undefined") {
          result[key] = value.compile(props)
        } else {
          result = value.compile(props, result)
        }
      } else if (typeof value === "function") {
        if (typeof key !== "undefined") {
          result[key] = value(props).compile(props)
        } else {
          result = value(props).compile(props, result)
        }
      } else if (Array.isArray(value)) {
        result[key] = (value as string[]).join(" ")
      } else {
        result[key] = value as string
      }
    }

    return result
  }

  concat(rows: Rows) {
    this.raw = this.raw.concat(rows.raw)
  }

  add(property: IProperty) {
    this.raw.push(property)
  }

  set(key: string, value: string | Rows) {
    // Properties like `transform` contains space-separated multiple values.
    // `set` might get called multiple times for one transform, so we need to group them together.
    if (!listEnabledFor[key]) {
      this.raw.push({ key, value })
      return
    }

    const existing = this.raw.find(row => row.key === key)
    if (existing) {
      ;(existing.value as string[]).push(value as string)
      return
    }

    this.raw.push({ key, value: [value as string] })
  }
}

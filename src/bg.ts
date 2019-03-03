import Rows from "./rows"
import { map } from "./css"

export interface IOptions {
  color?: string
  image?: string
  transparent?: boolean,
  cover?: boolean
  contain?: boolean
  center?: boolean
  norepeat?: boolean,
  repeat?: string
  position?: string
  size?: string,
}

export default function bg(rows: Rows, options: IOptions) {
  if (options.image) {
    options.image = `url(${options.image})`
  }

  if (options.transparent) {
    options.color = "transparent"
  }

  if (options.cover) {
    options.size = "cover"
  }

  if (options.contain) {
    options.size = "contain"
  }

  if (options.center) {
    options.position = "center"
  }

  if (options.norepeat) {
    options.repeat = "no-repeat"
  }

  map(rows, options, {
    image: "background-image",
    color: "background-color",
    repeat: "background-repeat",
    size: "background-size",
    position: "background-position"
  })
}

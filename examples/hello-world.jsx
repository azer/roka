import roka from "../dist"
import * as React from "react"
import * as ReactDOM from "react-dom"

const HelloWorld = roka()
  .absolute()
  .stretch()
  .center()
  .sans({ size: "3rem" })
  .color({ fg: "yellow", bg: "#FF6A86" })
  .select("&:hover", roka().color({ fg: "#ff6a86", bg: "yellow" }))
  .rotate(-1.5)
  .scale(1.5)
  .cond(({ randomNumber }) => randomNumber == 3, roka().color({ bg: "black" }))
  .with(({ randomNumber }) =>
    roka().select("&::after", roka().content(` (${randomNumber})`))
  )
  .element()

const randomNumber = Math.floor(Math.random() * 5)

ReactDOM.render(
  <HelloWorld randomNumber={randomNumber}>Hello World</HelloWorld>,
  document.body
)

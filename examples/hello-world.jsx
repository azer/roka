import roka from "../dist"
import * as React from "react"
import * as ReactDOM from "react-dom"

const HelloWorld = roka()
  .absolute()
  .stretch()
  .center()
  .sans({ size: "3rem" })
  .color({ fg: "yellow", bg: "#FF6A86" })
  .element()

ReactDOM.render(<HelloWorld>Hello World</HelloWorld>, document.body)

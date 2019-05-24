# Roka

High-level styling library for [emotion](https://github.com/emotion-js/emotion).

## Install

```bash
$ yarn add azer/roka
```

## Usage Examples

### Hello World

```tsx
import roka from "roka"

const HelloWorld = roka()
  .absolute()
  .stretch()
  .center()
  .sans({ size: "3rem" })
  .color({ fg: "yellow", bg: "#FF6A86" })
  .element()

export default (props: IProps) => {
  return (
    <HelloWorld>
      Hello World
    </HelloWorld>
  )
}
```

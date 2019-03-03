# Roka

High-level styling library for [styled-components](https://github.com/styled-components/styled-components).

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

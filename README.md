# Roka

High-level styling library for [styled-components](https://github.com/styled-components/styled-components).

## Usage Examples

### Hello World

```tsx
import roka from "roka"

const HelloWorld = roka()
  .center()
  .absolute({ left: "0", right: "0" })
  .easein(0.1)
  .element()

export default (props: IProps) => {
  return (
    <HelloWorld>
      Hello World
    </HelloWorld>
  )
}
```

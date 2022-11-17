## JSX

#### event listeners

give a JSX element an event listener by adding an attribute
`<img onClick={myFunc} />`

**note** 
event listeners are named onSomething; onClick, onCopy, onMouseOver

using curly braces like this is known as "injecting" javascript 

if statements cannot be written in an injection, they'll break

when you need conditional rendering, use a ternary operator

```
const greeting = (
  <h1>
    { friend ? 'long time no see, bud' : 'hello' }
  </h1>
  )
```

or perhaps `&&`

```const todo = (
  <ul>
    { !weekend && <li>yoga</li> }
    <li>breakfast</li>
    <li>vitamins</li>
    { friday && <li>recycling</li> }
  </ul>
)
```
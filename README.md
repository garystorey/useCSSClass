# useCSSClass

A small utility hook to concatonate CSS classNames objects into a string.

## Example

```js

const value = 1;
const classes = useCSSClass({
    'default' : true,
    'notadded' : (value ===0),
    'added' : (value===1)
});
console.log(classes);
// "default added"

```

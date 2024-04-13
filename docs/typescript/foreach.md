---
title: Foreach
---

# TypeScript Foreach Loop

In TypeScript, there are two foreach loop types, `for..of` and `for...in`.

`for...of` is a standard foreach loop:

```TypeScript
let cities: Array<string> = new Array<string>();
cities.push("Los Angeles");
cities.push("Seattle");

for (let city of cities) {
  console.log(city);
}
```

`for..in` is a specialized foreach loop used to list all properties of object, including inherited.

## References

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

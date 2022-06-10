### Arrays in Typescript

In general we use this syntax to declare an Array

```js
const cars = ['TATA','Ford','Toyota'];
```

if we use this code in Typescript without any type annotation , and we have values that are all strings,
so now Typescript will going to assusme that , this array will always contain `string`.
So that's `Type Inference` Doing its work automatically.

But if we want to explicitly define `Type`, then we have to use this syntax

```js
const cars : string[] = ['TATA','Ford','Toyota'];
```

#### Flexible type annotation to store different types of values in array

```js
const dates = [new Date(), '01/07/1998'];
```
we are storing dates here, but in different types, Date & String

```js
const dates : (Date | string)[] = [new Date(), '01/07/1998'];
```
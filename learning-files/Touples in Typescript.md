### Touples in Typescript

```js
const drink = {
  color:'red',
  carbonated:true,
  sugar:40,
}
```
if we convert these values to an array , then our array will look like this,

```ts
const cola = ['red', true, 40];
```
this can cause error like
```js
cola[0] = 40; // which should not be happening , because 1st value is string.
```

if we hover over cola, the type annotation will say `( string | number | boolean)[]`
and the drawback of this is we can freely swap the order of the array. which can be problamatic thing for future developers

To avoid this, we're going to add on an annotation to this array.
this annotation will turn this `array` into a `Touple`

```ts
const cola : [string, boolean, number] = ['red', true, 40];
```
now this won't happer
```ts
cola[0] = 50; // this cause a immediate error display
```

by doing this we preserve the order of an array , and convert it into a Touples.

#### Alternate way to avoid repeating this [string, boolean, number] is by using 
### Type Alias

```ts
type Drink = [string, boolean, number];
```
this does not create an array, insted it is creating an idea of a Touple inside of our application
and we can freely use it anywhere.
so now we can do this.

```ts
const cola : Drink = ['red', true, 40];
const sprite : Drink = ['green', true, 40];
const tea : Drink = ['brown', false, 40];
```

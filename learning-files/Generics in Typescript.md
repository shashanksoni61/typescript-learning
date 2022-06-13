### Generics In Typescript

lets learn it thorugh an example.
suppose we have a helper function to insert a passed value at the beginning of an array.

```ts
function insertAtBeginning(array: any[], value: any) {
  const newArr = [value, ...array];
  return newArr;
}

const demoarr = [1, 2, 3];

const updatedArr = insertAtBeginning(demoarr, -1); // [-1,1,2,3]
```

if i hover over `updatedArr` , it is inferred to be of type `any array`.
means an array, full of any kind of values.

Typescript here doesn't pick up, that it's an array full of numbers,

Why? because we have `any` in `function insertAtBeginning(array : any[],value:any)`.

And if I change this `any []` to `number[]`, then we won't be able to use it with other types like `string` etc.

So we need `any[]` but that also removes all kind of typescript support we might be getting while calling this function.

What do I mean by that ?

Let's take the previous example,

```ts
const updatedArr = insertAtBeginning(demoarr, -1); // [-1,1,2,3]
```

in this line of code , we know the type of updatedArr is `number` type,
but typescript shows `any` because we use `any` in `type definition`.

So if I do this

```ts
updatedArr[0].split("");
```

I will not get any compile time error, I will get `runtime error` instead , because `split()` is a method available for `strings`, but again typescript does not figure it out.

And To work around such problems, we have this feature of `Generics`.

With the help of this feature , we can convert our `insertAtBeginning function` into a Generic type function.

To use this we use a special syntax `<>`, inside this we can define a Generic Type which
will only be available inside of this function

#### Using Generics in function

```ts
function insertAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...newArr];
  return newArr;
}
```

Now after adding this, typescript will be able to know that it should look at the values of argument and know their value type.

By adding this `<T>` we tell typescript that the type of passed array and passed value should be the same.

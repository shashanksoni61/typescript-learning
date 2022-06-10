### Annotation around objects

```js
const profile = {
  name : 'shashank',
  age:23,
  coords:{
    lat:0,
    lng:0
  },
  setAge(age: number): void {
    this.age = age;
  }
}

```

#### Destructuring properties out of object

this is how we normally destructure objects in JS,
```js
const {age} = profile;
```

Now To attack type Annotation with this `age` variable we will use

```js
const {age} : {age: number} = profile;
```

we can't just do it like
```js
const {age : number} = profile;
```
because this will cause an error,

Instead we have to list out the structure of profile object
```js
const {age} : {age: number} = profile;
```
another example with same object
```js
const {coords : {lat, lng}}: {coords : {lat: number; lng: number}} = profile

```

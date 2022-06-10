### Interfaces In Typescript

Interfaces - Creates a new type (custom type), describing the property names & value types of an object.

we have an object
```ts
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

```

and we have a function to print this vehicle 
```ts
const printVehicle = (vehicle) => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broker: ${vehicle.broken}`)
}
```

now to give type annotatation to the function & it's parameter we do something like this.
```ts
const printVehicle = (vehicle:{name:string; year: number; broken:boolean}):void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broker: ${vehicle.broken}`)
}
```

`{name:string; year: number; broken:boolean}` because we want to pass an argument to `printVehicle` function with these properties.

Using type annotatation this way make our code structure messy.
to avoid this and also re-use type annotatation we use `Interfaces`

ex.

```ts 
interface Vehicle {
  name:string; 
  year: number; 
  broken:boolean
}
```

So now rather type typeing this `{name:string; year: number; broken:boolean}` long annotatation inside the function parameter, we can use `Vehicle` `interface`
```ts
const printVehicle = (vehicle: Vehicle):void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broker: ${vehicle.broken}`)
}
```

So what are we saying by putting this code in?

We are now saying that in order to call the `printVehicle` function you must pass in an `object` that meets
the specifications provided by the `Vehicle` interface.
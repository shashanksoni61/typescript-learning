#### Classes in Typescript

Class - Blueprint to create an object with some fields (Values) and method (functions) to represent a `thing`

```ts
class Vehicle {
  drive(): void {
    console.log("driving noices");
  }
}
```

now we will create an instance of this class

```ts
const vehicle - new Vehicle();
```

```ts
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
```

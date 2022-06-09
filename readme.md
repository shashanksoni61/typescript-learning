# Simple Todo App with React & Typescript

I created this project while learning Typescript with React.

Note : I'm using Vite as a build tool , insted of create-react-App

```js
const App: FC = () => {};
```

App is a functional component, and when we create a React Application with Typescript,
we get a functional Type called FC,

### State Variables Types

This ToDO Application has two values , one is task name & another one is deadline,

Now we have to create state variabled for these two values & one for our Todo list Array

```js
const [task, setTask] = useState("");
const [deadline, setDeadline] = useState(0);
const [todoList, setTodoList] = useState([]);
```

now we will assign types to these variables

```js
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
```

task is a string type & deadline is a number type;

todoList is a bit different , because we are using a different/custom type here to store a specific types of values;

An interface describes the shape of an object in TypeScript. They can be used to provide information about object property names and the datatypes their values can hold to the TypeScript compiler.

```
Interfaces make sure that everything is implemented as expected.
```

Here we Wrote <ITask>[], which means , this todoList will store an array of objects which has a specific structure.

ex.

```js
let colors: string[] = ["red", "green", "blue"];
```

Here we wrote string[], which means colors variable will be an array of strings.
similarly

```js
<ITask>[] ==> [<ITask>,<ITask>,<ITask>];
```

to define an interface we use interface keyword , followed by a object structure

```js
interface ITask {
  task: string;
  deadline: number;
  id: number;
}
```

by doing this we ensure that , our Array will store objects with there key and types

### Event Handleres Types

here's a little markup for our todo app input boxes

```js
<input type="text" name="task" onChange={handleChange} value={task} />
<input
    type="number"
    name="deadline"
    onChange={handleChange}
    value={deadline}
/>
<button onClick={addTask}>Add</button>
```

here we have a input event handler function called handleChange

to give type to this function we use `ChangeEvent` Type which we import from React;

```js
const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  const field = event.target.name;
  console.log(event.target.type);
  if (field === "task") setTask(event.target.value);
  else setDeadline(Number(event.target.value));
};
```

parameter `event` is a `input` event, that's why we use `ChangeEvent<HTMLInputElement>`

after `ChangeEvent<HTMLInputElement>` we wrote `void`, which is not necessory but a way to tell function's return type
in this case this function return nothing, so we use `void`;

```js
const addTask = (): void => {
  if (!task || !deadline) return;

  setTodoList((p) => [...p, { task, deadline, id: Date.now() }]);
  setTask("");
  setDeadline(0);
};
```

add task also return nothing so, return type is void,
after adding the task , we will render it

```js
<div>
  {todoList.length
    ? todoList.map((item: ITask, index: number) => {
        return (
          <SingleTask key={index} task={item} completedTask={completedTask} />
        );
      })
    : "No Task Remaining"}
</div>
```

again we user ITask interface with item, to tell TypeScript that, this item will have these `{ task: string; deadline: number; id: number; } ` properties

### Defining Types in Props for child component

without types, this is how our child component looks

```js
const SingleTask = ({ task, completedTask }) => {
  return (
    <div style={style}>
      <span>{task.task}</span>
      <span>{task.deadline}</span>
      <button onClick={() => completedTask(task.id)}>x</button>
    </div>
  );
};
```

To implement type checking in props we can again define interface

```js
interface Props {
  task: ITask;
  completedTask(id: number): void;
}
```

we assign `Itask` to `task` prop, to give it similar properties,
now for function props we use `()` after prop name with thier parameter types & function return type

after implementing types in our child component, it will look like

```js
const SingleTask = ({ task, completedTask }: Props) => {
  return (
    <div style={style}>
      <span>{task.task}</span>
      <span>{task.deadline}</span>
      <button onClick={() => completedTask(task.id)}>x</button>
    </div>
  );
};
```

So this was a simple Todo Application with some important type checking enabled.
Thanks.

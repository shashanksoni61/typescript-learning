import { ChangeEvent, FC, useState } from "react";

import { ITask } from "./interface";

import "./App.css";
import SingleTask from "./components/SingleTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const field = event.target.name;
    console.log(event.target.type);
    if (field === "task") setTask(event.target.value);
    else setDeadline(Number(event.target.value));
  };

  const addTask = (): void => {
    if (!task || !deadline) return;

    setTodoList((p) => [...p, { task, deadline, id: Date.now() }]);
    setTask("");
    setDeadline(0);
  };

  const completedTask = (id: number): void =>
    setTodoList((p) => p.filter((item) => id !== item.id));

  return (
    <div className="App">
      <div>
        <input type="text" name="task" onChange={handleChange} value={task} />
        <input
          type="number"
          name="deadline"
          onChange={handleChange}
          value={deadline}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        {todoList.length
          ? todoList.map((item: ITask, index: number) => {
              return (
                <SingleTask
                  key={index}
                  task={item}
                  completedTask={completedTask}
                />
              );
            })
          : "No Tasks Remaining"}
      </div>
    </div>
  );
};

export default App;

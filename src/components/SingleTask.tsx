import { ITask } from "../interface";

interface Props {
  task: ITask;
  completedTask(id: number): void;
}

const style = {
  display: "flex",
  justifyContent: "space-between",
  width: "500px",
  margin: "0 auto",
};

const SingleTask = ({ task, completedTask }: Props) => {
  return (
    <div style={style}>
      <span>{task.task}</span>
      <span>{task.deadline}</span>
      <button onClick={() => completedTask(task.id)}>x</button>
    </div>
  );
};

export default SingleTask;

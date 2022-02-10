import { Task } from "./components/Task";
import { Title } from "./components/Title";

const tasks = [
  {
    id: 1,
    name: "Task 1",
  },
  {
    id: 2,
    name: "Task 2",
  },
  {
    id: 3,
    name: "Task 3",
  },
]

function App() {
  return (
    <div className="App">
      <Title content="All Tasks" />
      {
        tasks.map(task => {
          return (
            <Task key={task.id} nameTask={task.name} />
          )
        }
          )
        }
    </div>
  );
}

export default App;

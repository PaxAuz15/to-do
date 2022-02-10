import { Task } from "./components/Task";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title content="All Tasks" />
      <Task nameTask="Task 1" />
      <Task nameTask="Task 2" />
      <Task nameTask="Task 3" />
    </div>
  );
}

export default App;

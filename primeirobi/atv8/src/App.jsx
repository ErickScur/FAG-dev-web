import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const taskText = inputValue.trim();

    if (taskText !== "") {
      const newTask = {
        id: Date.now(),
        text: taskText,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <form className="input-container" onSubmit={addTask}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} onClick={() => removeTask(task.id)}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

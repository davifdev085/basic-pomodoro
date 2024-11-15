import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import Footer from "./components/Footer";

function App() {
  const WORK_TIME = 25;
  const SHORT_BREAK = 5;
  const LONG_BREAK = 15;

  const [minutes, setMinutes] = useState(WORK_TIME);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [currentMode, setCurrentMode] = useState("work");

  
  const [tasks, setTasks] = useState([]); // Estado para armazenar as tarefas
  const [newTask, setNewTask] = useState(""); // Estado para nova tarefa

  // Função para adicionar nova tarefa
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { task: newTask, completed: false }]); // Adiciona a nova tarefa ao estado
      setNewTask(""); // Limpa o campo de nova tarefa
    }
  };

  // Função para atualizar o valor da nova tarefa
  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  useEffect(() => {
    // Verifica se já existem tarefas no localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    // Atualiza o localStorage sempre que as tarefas mudarem
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      const audio = new Audio('/path/to/alarm-sound.mp3');
      audio.play();
    }
  }, [minutes, seconds]);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            switch (currentMode) {
              case "work":
                setCurrentMode("shortBreak");
                setMinutes(SHORT_BREAK);
                break;
              case "shortBreak":
                setCurrentMode("work");
                setMinutes(WORK_TIME);
                break;
              case "longBreak":
                setCurrentMode("work");
                setMinutes(WORK_TIME);
                break;
              default:
                break;
            }
            setSeconds(0);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, currentMode]);

  const startStopTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setCurrentMode("work");
    setMinutes(WORK_TIME);
    setSeconds(0);
  };
  const startShortBreak = () => {
    setIsActive(false);
    setCurrentMode("shortBreak");
    setMinutes(SHORT_BREAK);
    setSeconds(0);
    setIsActive(true);
  };
  const startLongBreak = () => {
    setIsActive(false);
    setCurrentMode("longBreak");
    setMinutes(LONG_BREAK);
    setSeconds(0);
    setIsActive(true);
  };

  const handleCompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Timer minutes={minutes} seconds={seconds} currentMode={currentMode} />
      <Controls
        isActive={isActive}
        startStopTimer={startStopTimer}
        resetTimer={resetTimer}
        startShortBreak={startShortBreak}
        startLongBreak={startLongBreak}
      />
     
      <div>
        <h5>Atividades em andamento</h5>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            {task.task}
            <button onClick={() => handleCompleteTask(index)}>
              {task.completed ? "Desmarcar" : "Concluir"}
            </button>
            <button onClick={() => handleRemoveTask(index)}>Remover</button>
          </li>
        ))}
      </ul>

      {/* Seção de adicionar tarefas */}
      <div className="task-section">
        <input
          type="text"
          value={newTask}
          onChange={handleTaskChange}
          placeholder="O que você está fazendo"
        />
        <button onClick={handleAddTask} className="add-task-btn">
          <i className="fas fa-plus"></i> Adicionar Tarefa
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;

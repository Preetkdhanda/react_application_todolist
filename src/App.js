import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [toDos, setToDos] = useState([
    { name: "Hoover", priorty: "High" },
    { name: "Get Groceries", priorty: "High" },
    { name: "MOT", priorty: "Low" },
  ]);

  const [newToDo, setNewToDo] = useState("")
  const [newPriorty, setNewPriorty] = useState("")

  const allTasks = toDos.map((toDo, index) => {
    return (<li key={index}>
      <span className={toDo.priorty}>{toDo.name}</span>
      

    </li>)
  })

  const handleToDoInput = (event) => {
    setNewToDo(event.target.value);
  }

  const saveNewToDo = (event) => {
    event.preventDefault();
    const copyTasks = [...toDos]
    copyTasks.push({ name: newToDo, priorty: newPriorty });
    setToDos(copyTasks);
    setNewToDo("");
  }

  const updatePriorty = (event) => {
    setNewPriorty(event.target.value);

  }



  return (
    <div className="App">
      <h1>To Do List!</h1>
      <hr></hr>
      <ul>
        {allTasks}

      </ul>

      <form onSubmit={saveNewToDo}>
        <label htmlFor='new-todo'>Add To Your To-Do List!</label>
        <input id='new-todo' type='text' value={newToDo} onChange={handleToDoInput} />
        <label htmlFor='High'>High Priorty</label>
        <input name='priorty' id='priortyhigh' type='radio' value="High" onChange={updatePriorty} />
        <label htmlFor='Low'>Low Priorty</label>
        <input name='priorty' id='priortylow' type='radio' value= "Low" onChange={updatePriorty} />
        <input type='submit' value='Save New Todo' />

      </form>
    </div>
  );
}

export default App;

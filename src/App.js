import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Task from './components/Task';

function App() {
  const [list, setList] = useState([]);
  
  return (
    <div className="App container" style={{ width: "700px" }}>
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list} key={i} />
      ))}
      <Input list={list} setList={setList}/>
    </div>
  );
}

export default App;

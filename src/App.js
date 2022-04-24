import React, {useState} from 'react';

import  "./main.css";
function App() {
  // const [state, setState] = useState(0);
  // const [val, setVal] = useState("");
  // function inc(){
  
  //   return setState(state + 1)
 
  // }
  // function dec(){
  //   if(state > 0){
  //     return setState(state - 1)
  //   }
  // }

  // function inp(evt){
  //   // console.log(evt.code);
  //   if(evt.code === "Enter"){
  //     console.log(evt.target.value);
  //    return setVal(evt.target.value);
  //   }
  // }

  const [todos, setTodos] = useState([
    {id:1, title: "1-some", isComplated: false},
    {id:2, title: "1-some", isComplated: false},
    {id:3, title: "1-some", isComplated: false},
  ]);

  function createTodo(evt){
    const newTodo = {
      id: todos.length +1,
      title: evt.target.value,
      isComplated: false
    }

    if(evt.code === "Enter"){
      return setTodos([...todos, newTodo]);
    }
  }

  function delbtn(evt){
    const btnId = evt.target.dataset.todoId;
    console.log(btnId);

    const filter = todos.filter(a => a.id !== btnId);
    return setTodos(filter)
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="visually-hidden"> hello </h1>

        <input className='input' onKeyUp={createTodo} type="text" placeholder='type something...' />

        <ol className='todo-list'>
            {
              todos.map(item => (
                <li data-todo-id={item.id}> {item.id} {item.title} <input type="checkbox" /> <button onClick={delbtn}>del</button> </li>
              ))
            }
        </ol>

        {/* <button onClick={inc}>increment</button>
        <button onClick={() => setState(state + 1)}>increment</button>
        <button onClick={dec}>decrement</button>
        <button onClick={() => setState (state -1)}>decrement</button>

        <h1 className="visually-hidden"> {val} </h1>
        <input onKeyUp={inp} type="text" placeholder='yoz'/>

        <div className="wrapper">
          <input className="input" type="text" placeholder="write the task.." required/>
          <button className="add">Add</button>
        </div>
        <ol className="list">
          <li className="list-item">ffihieuhieuhiuh</li>
          <li className="list-item">ffihieuhieuhiuh</li>
        </ol> */}
      </header>
    </div>
  );
}

export default App;

import React, { useState, useRef } from 'react';
import Hidden from './Components/Hidden';
import TodoItem from './Components/TodoItem';
import Control from './Components/Control';
import langJs from './Components/Lang';

import './main.css';

const Home = () => {
	let newTodo;
	const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || []);
	const [leftVal, setLeftVal] = useState(0);
  const [lang, setLang] = useState("uz")
  const select = useRef("");
  

	const inputVal = useRef();

	function add(evt) {
		evt.preventDefault();
		newTodo = {
			id: todos[todos.length - 1]?.id + 1 || 0,
			title: inputVal.current.value,
			isComplated: false,
		};
		window.localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
		inputVal.current.value = null;
		return setTodos([...todos, newTodo]);
	}

	function delbtn(evt) {
		const btnId = evt.target.dataset.todoId - 0;

		const filter = todos.filter((a) => a.id !== btnId);
		window.localStorage.setItem('todos', JSON.stringify(filter));
		return setTodos(filter);
	}

	function checked(evt) {
		const checkId = evt.target.dataset.todoId - 0;

		const find = todos.find((a) => a.id === checkId);
		find.isComplated = !find.isComplated;


    setTodos([...todos])
		window.localStorage.setItem('todos', JSON.stringify([...todos]));
	}

  function changeLang(evt){
    setLang(select.current.value)
  }

	return (
		<div className='container'>
			<Hidden />
			<h2 className='todo-title'>{langJs[lang].title}</h2>

			<form className='form' onSubmit={add} autoComplete='off' method='post'>
				<input
					className='input'
					ref={inputVal}
					type='text'
					placeholder={langJs[lang].placeholder}
					maxLength='25'
					required
				/>

				<button type='submit'>{langJs[lang].add}</button>
			</form>

      <select onChange={changeLang} ref={select} >
        <option value="uz">Uz</option>
        <option value="ru">Ru</option>
        <option value="en">En</option>
      </select>
			<ol className='todo-list'>
				{todos.map((item, index) => (
					<TodoItem
						key={index}
						id={item.id}
						title={item.title}
						dataset={item.id}
						forId={item.id}
						delfunc={delbtn}
						checkedt={checked}
						isCompleted={item.isComplated}
					/>
				))}
			</ol>
      <Control language={lang} />
		</div>
	);
};

export default Home;

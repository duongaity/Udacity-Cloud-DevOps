import React from 'react';

import './App.css';

import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

function App() {
	return (
		<div className="app">
			<h1 className="app-title">My Tasks</h1>
			<TodoAdd />
			<TodoList />
		</div>
	);
}

export default App;

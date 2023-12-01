import React from 'react';
import '../styles';
import { TodoItem } from '../components/TodoItem';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoButtonCreate } from '../components/TodoButtonCreate';


const Todos = [{text:'primer tarea', completed: false}];

function App() {
  return (
    <React.Fragment>

      <TodoCounter total={12} completed={25}/>
      <TodoSearch/>

      <TodoList>
        {Todos.map(Todos => (
          <TodoItem  
            text = {Todos.text}
            completed = {Todos.completed}
          />))}
      </TodoList>
      
      <TodoButtonCreate/>
      
    </React.Fragment>
  );
}

export default App;
import { FETCH_TODOS, SET_TODOS, EDIT_TODO, DELETE_TODO, ADD } from './types';

export const fetchTodos = () => ({
  type: FETCH_TODOS,
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const addTodo = (todo) => ({
  type: ADD,
  payload: todo,
});

export const editTodo = (index, todoObj) => ({
  type: EDIT_TODO,
  payload: [index, todoObj],
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: index,
});

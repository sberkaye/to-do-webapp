import {
  FETCH_TODOS,
  SET_TODOS,
  EDIT_TODO,
  EDIT_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  DELETE_TODO,
  ADD,
  ADD_REQUEST,
} from './types';

export const fetchTodos = () => ({
  type: FETCH_TODOS,
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: index,
});

export const editTodo = (index, todoObj) => ({
  type: EDIT_TODO,
  payload: [index, todoObj],
});

export const addTodo = (todo) => ({
  type: ADD,
  payload: todo,
});

// request actions to be called to notify the watcher saga

export const editTodoRequest = (index, todoObj) => ({
  type: EDIT_TODO_REQUEST,
  payload: [index, todoObj],
});

export const deleteTodoRequest = (index) => ({
  type: DELETE_TODO_REQUEST,
  payload: index,
});

export const addTodoRequest = (todo) => ({
  type: ADD_REQUEST,
  payload: todo,
});

import { call, put } from 'redux-saga/effects';
import {
  requestGetTodos,
  requestPostTodo,
  requestDeleteTodo,
  requestEditTodo,
} from '../requests/todos';
import {
  setTodos,
  deleteTodo,
  editTodo,
  addTodo,
} from '../../actions/actionTodos';

// handler for todos - asynchronously gets a response from
// the request method and puts the required data to the redux store
function* handleGetTodos() {
  try {
    const response = yield call(requestGetTodos);
    const { data } = response;
    yield put(setTodos(data));
  } catch (err) {
    console.error(err);
  }
}

// handler for sending POST requests to the server and adding
// the new todo to the redux store
function* handleAddTodo(action) {
  try {
    yield call(requestPostTodo, action.payload); // send POST request
    yield put(addTodo(action.payload)); // also add it to the redux store
    yield handleGetTodos();
  } catch (err) {
    console.error(err);
  }
}

// handler for sending DELETE requests to the server
// and deleting todos from redux store
function* handleDeleteTodo(action) {
  try {
    yield call(requestDeleteTodo, action.payload);
    yield put(deleteTodo(action.payload));
    yield handleGetTodos();
  } catch (err) {
    console.error(err);
  }
}

// handler for editing todos
function* handleEditTodo(action) {
  try {
    yield call(requestEditTodo, action.payload);
    yield put(editTodo(action.payload[0], action.payload[1]));
    yield handleGetTodos();
  } catch (err) {
    console.error(err);
  }
}

export { handleGetTodos, handleAddTodo, handleDeleteTodo, handleEditTodo };

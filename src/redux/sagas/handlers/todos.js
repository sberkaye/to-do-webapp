import { call, put } from 'redux-saga/effects';
import {
  requestGetTodos,
  requestPostTodo,
  requestDeleteTodo,
  requestEditTodo,
} from '../requests/todos';
import { setTodos } from '../../actions/actionTodos';

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

function* handleAddTodo(action) {
  try {
    yield call(requestPostTodo, action.payload);
  } catch (err) {
    console.error(err);
  }
}

function* handleDeleteTodo(action) {
  try {
    yield call(requestDeleteTodo, action.payload);
    yield handleGetTodos();
  } catch (err) {
    console.error(err);
  }
}

function* handleEditTodo(action) {
  console.log('handleEditTodo action: ', action);
  try {
    yield call(requestEditTodo, action.payload);
    yield handleGetTodos();
  } catch (err) {
    console.error(err);
  }
}

export { handleGetTodos, handleAddTodo, handleDeleteTodo, handleEditTodo };

import { takeLatest, all } from '@redux-saga/core/effects';
import {
  handleGetTodos,
  handleAddTodo,
  handleDeleteTodo,
  handleEditTodo,
} from './handlers/todos';
import {
  FETCH_TODOS,
  ADD_REQUEST,
  DELETE_TODO_REQUEST,
  EDIT_TODO_REQUEST,
} from '../actions/types';
import { takeEvery } from 'redux-saga/effects';

// root saga which will watch for actions and forward them to the corresponding handlers
export function* rootSaga() {
  yield all([
    takeLatest(FETCH_TODOS, handleGetTodos),
    takeEvery(ADD_REQUEST, handleAddTodo),
    takeLatest(DELETE_TODO_REQUEST, handleDeleteTodo),
    takeEvery(EDIT_TODO_REQUEST, handleEditTodo),
  ]);
}

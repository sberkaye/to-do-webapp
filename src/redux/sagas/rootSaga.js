import { takeLatest, all } from '@redux-saga/core/effects';
import {
  handleGetTodos,
  handleAddTodo,
  handleDeleteTodo,
  handleEditTodo,
} from './handlers/todos';
import { FETCH_TODOS, ADD, DELETE_TODO, EDIT_TODO } from '../actions/types';
import { takeEvery } from 'redux-saga/effects';

// root saga which will forward actions to the corresponding handlers
export function* rootSaga() {
  yield all([
    takeLatest(FETCH_TODOS, handleGetTodos),
    takeEvery(ADD, handleAddTodo),
    takeEvery(DELETE_TODO, handleDeleteTodo),
    takeEvery(EDIT_TODO, handleEditTodo),
  ]);
}

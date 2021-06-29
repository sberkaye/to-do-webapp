import { takeLatest, all } from '@redux-saga/core/effects';
import { handleGetTodos, handleAddTodo } from './handlers/todos';
import { FETCH_TODOS, ADD } from '../actions/types';

// root saga which will forward actions to the corresponding handlers
export function* rootSaga() {
  yield all([
    takeLatest(FETCH_TODOS, handleGetTodos),
    takeLatest(ADD, handleAddTodo),
  ]);
}

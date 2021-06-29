import { takeLatest } from '@redux-saga/core/effects';
import { handleGetTodos } from './handlers/todos';
import { FETCH_TODOS } from '../actions/types';

// root saga which will forward each FETCH_TODOS action
// to the handler
export function* rootSaga() {
  yield takeLatest(FETCH_TODOS, handleGetTodos);
}

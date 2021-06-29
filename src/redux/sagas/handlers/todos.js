import { call, put } from 'redux-saga/effects';
import { requestGetTodos, requestPostTodo } from '../requests/todos';
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
    yield call(requestPostTodo(action));
    handleGetTodos();
  } catch (err) {
    console.err(err);
  }
}

export { handleGetTodos, handleAddTodo };

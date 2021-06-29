import { call, put } from 'redux-saga/effects';
import { requestGetTodos } from '../requests/todos';
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

// function* handleAddTodo(action) {

// }

export { handleGetTodos };

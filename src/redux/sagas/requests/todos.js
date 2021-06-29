import axios from 'axios';

// method to request todos, will be called asynchronously by the handler
function requestGetTodos() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:3004/todos',
  });
}

// request to create a new todo via sending a post request
function requestPostTodo(todo) {
  return axios.request({
    method: 'post',
    url: 'http://localhost:3004/todos',
    data: todo,
  });
}

export { requestGetTodos, requestPostTodo };

import axios from 'axios';

// method to request todos, will be called asynchronously by the handler
function requestGetTodos() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:3004/todos',
  });
}

// request to create a new todo via sending a POST request
function requestPostTodo(todo) {
  return axios.request({
    method: 'post',
    url: 'http://localhost:3004/todos',
    data: todo,
  });
}

// request to delete a todo via sending a DELETE request
function requestDeleteTodo(index) {
  return axios.request({
    method: 'delete',
    url: `http://localhost:3004/todos/${index}`,
  });
}

// request to edit a todo via sending a PUT request
function requestEditTodo(todo) {
  return axios.request({
    method: 'put',
    url: `http://localhost:3004/todos/${todo[0]}`,
    data: todo[1],
  });
}

export { requestGetTodos, requestPostTodo, requestDeleteTodo, requestEditTodo };

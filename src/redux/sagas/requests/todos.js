import axios from 'axios';

// method to request todos, will be called asynchronously by the handler
function requestGetTodos() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:3000/todos',
  });
}

// function requestPostTodo(todo) {
//   return axios.request({
//     method: 'post',
//     url
//   });
// }

export { requestGetTodos };

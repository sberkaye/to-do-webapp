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

function requestDeleteTodo(index) {
  return axios.request({
    method: 'delete',
    url: `http://localhost:3004/todos/${index}`,
  });
}

function requestEditTodo(todo) {
  return axios.request({
    method: 'put',
    url: `http://localhost:3004/todos/${todo[0]}`,
    data: todo[1],
  });
}

// const fixIndexes = async (fromIdx) => {
//   const todos = await axios.get('http://localhost:3004/todos');
//   const length = todos.length;
//   console.log('length: ', length);
//   const fixRequests = [];
//   for (let i = fromIdx + 1; i < length; i++) {
//     fixRequests.push(
//       axios.patch(`http://localhost:3004/todos/${i}`, { id: i - 1 }),
//     );
//   }
//   Promise.all(fixRequests).then((values) => console.log(values));
// };

export { requestGetTodos, requestPostTodo, requestDeleteTodo, requestEditTodo };

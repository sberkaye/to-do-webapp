import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users/1/todos',
});

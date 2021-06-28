import { ADD } from '../actions/types';

const INITIAL_STATE = {
  todos: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

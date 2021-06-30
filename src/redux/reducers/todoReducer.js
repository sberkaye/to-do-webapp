import { SET_TODOS, EDIT_TODO, DELETE_TODO, ADD } from '../actions/types';

/**
 * A TODO object should look like this:
 * {
 *     name: string;
 *     description: string;
 *     completed: bool;
 *     writtenBy?: string;
 *     completedBy?: string;
 * }
 */

const INITIAL_STATE = {
  values: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        values: action.payload,
      };
    case EDIT_TODO:
      return {
        ...state,
        values: [
          ...state.values.slice(0, action.payload[0] - 1),
          action.payload[1],
          ...state.values.slice(action.payload[0] + 1),
        ],
      };
    case DELETE_TODO: {
      const { index } = action.payload;
      return {
        ...state,
        values: [
          ...state.values.slice(0, index),
          ...state.values.slice(index + 1),
        ],
      };
    }
    case ADD:
      return {
        ...state,
        values: [...state.values, action.payload],
      };
    default:
      return state;
  }
};

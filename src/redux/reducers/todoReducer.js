import { ADD } from '../actions/types';

/**
 * A TODO object should look like this:
 * {
 *     name: string;
 *     description: string;
 *     completed: bool;
 * }
 */

const INITIAL_STATE = {
  values: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        values: [...state.values, action.payload],
      };
    default:
      return state;
  }
};

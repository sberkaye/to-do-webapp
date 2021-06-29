import { SET_TODOS } from '../actions/types';

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
        values: [...state.values, ...action.payload],
      };
    default:
      return state;
  }
};

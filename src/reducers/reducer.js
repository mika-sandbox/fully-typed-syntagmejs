// @
import {
  ACTION_TYPE_SYNC,
  ACTION_TYPE_ASYNC,
  ACTION_TYPE_ASYNC_RESOLVED,
} from "../action-creators/action";

/**
 * @typedef {ValueOf<import("../action-creators/action").Actions>} A
 */

/**
 * @type {import('syntagme').Reducer<import('../action-creators/action').Actions, {}>}
 */
const reducer = ({ action }, previous = {}) => {
  switch (action.type) {
    case ACTION_TYPE_SYNC:
      return action.data;

    case ACTION_TYPE_ASYNC:
      return action.data;

    case ACTION_TYPE_ASYNC_RESOLVED:
      return action.data;
  }
};

export default reducer;

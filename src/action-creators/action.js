// @ts-check
import flux from "../syntagme";

/**
 * @constant
 */
export const ACTION_TYPE_SYNC = "ACTION_TYPE_SYNC";

/**
 * @constant
 */
export const ACTION_TYPE_ASYNC = "ACTION_TYPE_ASYNC";

/**
 * @constant
 */
export const ACTION_TYPE_ASYNC_RESOLVED = "ACTION_TYPE_ASYNC_RESOLVE";

/**
 * @typedef {ACTION_TYPE_SYNC | ACTION_TYPE_ASYNC | ACTION_TYPE_ASYNC_RESOLVED} ACTION_TYPES
 */

/**
 * @type {import("syntagme").ActionCreator<string, { obj: string }>}
 */
const syncAction = (params) => {
  return { obj: params };
};

/**
 * @typedef {import('syntagme').AsAction<ACTION_TYPE_SYNC, typeof syncAction>} SyncAction
 */
flux.actionCreator(ACTION_TYPE_SYNC, syncAction);

/**
 * @type {import("syntagme").ActionCreator<string, Promise<{ obj: string }>>}
 */
const asyncAction = (params) => {
  return Promise.resolve({ obj: params });
};

/**
 * @typedef {import('syntagme').AsAction<ACTION_TYPE_ASYNC, () => {}>} AsyncAction
 * @typedef {import('syntagme').AsAction<ACTION_TYPE_ASYNC_RESOLVED, typeof asyncAction>} AsyncActionResolved
 */
flux.actionCreator(ACTION_TYPE_ASYNC, asyncAction);

/**
 * @typedef { import("syntagme").AsActions<ACTION_TYPES, (SyncAction & AsyncAction & AsyncActionResolved)>} Actions
 */

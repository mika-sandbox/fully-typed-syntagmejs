type ValueOf<T> = T[keyof T];

declare module "syntagme" {
  export type ChangeSets<TActions> = { [T in keyof TActions]: string };

  export type Action<
    TActions = string,
    TChangeSets extends { [K in keyof TActions]: any }
  > = {
    type: TActions;
    data: TChangeSets;
    _data: TChangeSets[TActions];
  };

  export type ActionCreator<
    TParams = any,
    TReturn extends Promise<unknown> | object
  > = (args: TParams) => TReturn;

  export type Source =
    | "SYNTAGME"
    | "ACTION"
    | "ASYNC_ACTION"
    | "ASYNC_ACTION_REJECT"
    | "ASYNC_ACTION_RESOLVE";

  export type Payload<TActions = {}> = {
    action: TActions;
    source: Source;
  };

  export type Reducer<TActions = {}, TState = any> = (
    payload: Payload<ValueOf<TActions>>,
    state: TState
  ) => TState;

  // utility
  export type AsAction<
    TAction extends string,
    TActionCreator = ActionCreator
  > = {
    [K in TAction]: ReturnType<TActionCreator>;
  };

  export type AsActions<
    TActionTypes extends string,
    TActions extends { [K in keyof TActionTypes]: unknown }
  > = {
    [T in TActionTypes]: { data: TActions[T]; type: T };
  };

  class Syntagme {
    constructor(options = {}): Syntagme;

    ac<TParams, TReturns>(
      type: string,
      ac: ActionCreator<TParams, TReturns>
    ): void;

    action<TParams, TReturns>(type: string, args?: TParams): Promise<TReturns>;

    actionCreator<TParams, TReturns>(
      type: string,
      ac: ActionCreator<TParams, TReturns>
    ): void;

    reducer(reducer: Reducer | Reducer[]): void;
  }

  export { Syntagme };
}
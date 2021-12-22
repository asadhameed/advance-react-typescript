export enum ActionType {
  SaveComment,
  FetchComments,
  ChangeAuth,
  UnKnowAction,
}

export interface SaveAction {
  type: ActionType;
  payload: string;
}

export interface FetchAction {
  type: ActionType.FetchComments;
  payload: string[];
}

export interface Authentication {
  type: ActionType.ChangeAuth;
  payload: boolean;
}

export type Action = SaveAction | FetchAction | Authentication;

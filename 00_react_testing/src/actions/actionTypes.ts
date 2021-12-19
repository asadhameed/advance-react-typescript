export enum ActionType {
  SaveComment,
  FetchComments,
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

export type Action = SaveAction | FetchAction;

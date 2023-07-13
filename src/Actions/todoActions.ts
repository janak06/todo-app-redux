// Actions\todoActions.ts

// Action Types
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creators
export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

export const addTodo = (todo: string): AddTodoAction => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const toggleTodo = (index: number): ToggleTodoAction => {
  return {
    type: TOGGLE_TODO,
    payload: index,
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export type TodoAction = AddTodoAction | DeleteTodoAction | ToggleTodoAction;

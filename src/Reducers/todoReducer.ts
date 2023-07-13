// Reducers/todoReducer.ts

import {
  TodoAction,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../Actions/todoActions";

export interface TodoState {
  todos: {
    text: string;
    completed: boolean;
  }[];
}

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, { text: action.payload, completed: false }],
      };

    case DELETE_TODO:
      return {
        todos: state.todos.filter((_, index) => index !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;

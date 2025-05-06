import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { FilterType } from "../../components/TodoFilter";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  timestamp: number;
}

export interface TodosState {
  items: Todo[];
  filter: FilterType;
}

const loadTodosFromStorage = (): Todo[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
  }
  return [];
};

const initialState: TodosState = {
  items: loadTodosFromStorage(),
  filter: FilterType.ALL,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
        timestamp: Date.now(),
      };
      state.items.push(newTodo);

      if (typeof window !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(state.items));
      }
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;

        if (typeof window !== "undefined") {
          localStorage.setItem("todos", JSON.stringify(state.items));
        }
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      if (typeof window !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(state.items));
      }
    },

    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.items.find((item) => item.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;

        if (typeof window !== "undefined") {
          localStorage.setItem("todos", JSON.stringify(state.items));
        }
      }
    },

    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },

    reorderTodos: (
      state,
      action: PayloadAction<{ sourceIndex: number; destinationIndex: number }>,
    ) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const [removed] = state.items.splice(sourceIndex, 1);
      state.items.splice(destinationIndex, 0, removed);

      if (typeof window !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(state.items));
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, setFilter, reorderTodos } =
  todosSlice.actions;

export const selectTodos = (state: { todos: TodosState }) => {
  const { items, filter } = state.todos;

  switch (filter) {
    case FilterType.ACTIVE:
      return items.filter((todo) => !todo.completed);
    case FilterType.COMPLETED:
      return items.filter((todo) => todo.completed);
    default:
      return items;
  }
};

export const selectFilter = (state: { todos: TodosState }) => state.todos.filter;

export default todosSlice.reducer;

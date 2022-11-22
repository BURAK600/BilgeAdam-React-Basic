import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
  isloadingFirst: false,
  todo: {},
  pageSize: 0,
  count: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },

    deleteTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
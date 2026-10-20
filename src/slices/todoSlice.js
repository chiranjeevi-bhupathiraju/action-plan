import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addAction: (state, action) => {
      state.todos.push(action.payload);
    },
    editAction: (state, action) => {
      state.todos.find((item) => item.id === action.payload.id).desc =
        action?.payload.desc;
    },
    deleteAction: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addAction, editAction, deleteAction } = todoSlice.actions;

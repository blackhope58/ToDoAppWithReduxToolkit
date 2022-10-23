import {createSlice} from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: '1',
        text: 'Learn Redux',
      },
      {
        id: '2',
        text: 'Learn Js',
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter(item => item.id !== id);
      state.items = filtered;
    },
  },
});

export const {addTodo, remove} = todosSlice.actions;
export default todosSlice.reducer;

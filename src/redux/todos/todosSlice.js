import {createSlice, nanoid} from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: '1',
        text: 'Learn Redux',
        status: true,
      },
      {
        id: '2',
        text: 'Learn Js',
        status: true,
      },
      {
        id: '3',
        text: 'Go Gym',
        status: true,
      },
      {
        id: '4',
        text: 'Go Work',
        status: true,
      },
    ],
    removedItems: [],
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({text}) => {
        return {
          payload: {
            id: nanoid(),
            status: true,
            text,
          },
        };
      },
    },
    remove: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter(item => item.id !== id);
      state.items = filtered;
    },
    removedItem: (state, action) => {
      const {id} = action.payload;
      const item = state.items.find(item => item.id == id);
      state.removedItems.push(item);
      console.log(state.removedItems);
    },
  },
});

export const {addTodo, remove, removedItem} = todosSlice.actions;
export default todosSlice.reducer;

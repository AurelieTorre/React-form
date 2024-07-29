import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstname: '',
    lastname: '',
    age: 0,
    email: '',
    password: '',
  },
  reducers: {
    updateFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    updateLastname: (state, action) => {
      state.lastname = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;


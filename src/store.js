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
      console.log("updateFirstname", action.payload);
      state.firstname = action.payload;
    },
    updateLastname: (state, action) => {
      console.log("updateLastname", action.payload);
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

export const {
  updateFirstname,
  updateLastname,
  updateAge,
  updateEmail,
  updatePassword,
} = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;


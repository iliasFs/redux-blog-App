import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "John Doe" },
  { id: "1", name: "Jack Marble" },
  { id: "2", name: "Katerina Kozinski" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import UserProp from "../interface/UserInterface";

type AuthUser = {
  user: UserProp | null;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Karthi",
    email: "karthi@hotmail.com",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;

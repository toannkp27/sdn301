import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: storedUser ? storedUser.userInfo : null,
        isLoggedIn: storedUser ? storedUser.isLoggedIn : false,
    },
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem(
                "user",
                JSON.stringify({ userInfo: action.payload, isLoggedIn: true })
            );
            return action.payload;
        },
        logout: (state) => {
            state.userInfo = null;
            state.isLoggedIn = false;
            localStorage.removeItem("user");
        },
    },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 0, name: '田中太郎'},
    { id: 1, name: 'ごえもんくん'},
    { id: 2, name: 'うんちくん'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
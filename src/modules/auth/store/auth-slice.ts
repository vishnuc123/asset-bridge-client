import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../interface/IUser";

type TinitialState = {
    auth: IUser | null,
    isAuthenticated: boolean,
    loading:boolean
}
const initialState = {
    user: null,
    isAuthenticated: false,
    loading:true
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            state.loading=false

        },
        clearUser: (state) => {
            state.user = null,
                state.isAuthenticated = false
        }

    }

})
export const { setUser, clearUser } = authSlice.actions
export default authSlice.reducer
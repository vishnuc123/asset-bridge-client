import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../interface/IUser";
import type { TRole } from "../../../shared/types/commonTypes";

type TinitialState = {
    user: IUser | null,
    isAuthenticated: boolean,
    loading:boolean
    activeRole:TRole
}
const initialState:TinitialState = {
    user: null,
    isAuthenticated: false,
    loading:true,
    activeRole:"user"
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
        changeRole:(state,action) => {
            state.activeRole = action.payload.activeRole
        },
        clearUser: (state) => {
            state.user = null,
            state.isAuthenticated = false
            state.loading=false
        }

    }

})
export const { setUser, clearUser,changeRole } = authSlice.actions
export default authSlice.reducer
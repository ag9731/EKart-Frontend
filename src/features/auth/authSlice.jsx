import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Axios";


export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (credentials,thunkAPI) => {
        try {
          const response = await api.post("/register", credentials);
          return response.data;
        } catch (error) {
          console.log(error);
        }
    }
)

const initialState = {
    user:null,
    loading:true,
    error:false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthState(state) {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers : (builder) => {
    builder
    // register
    .addCase(registerUser.pending,(state)=>{
        state.loading = true,
        state.error = null
    })
    .addCase(registerUser.fulfilled,(state,action)=>{
        state.user = isAction.payload,
        state.loading = false
    })
    .addCase(registerUser.rejected,(state,action) => {
        state.error = action.payload,
        state.user = null
    })
  }
});

export const {clearAuthState} = authSlice.actions;
export default authSlice.reducer;
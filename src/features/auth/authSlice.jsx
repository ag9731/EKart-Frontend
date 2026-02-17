import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Axios";


export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (credentials,thunkAPI) => {
        try {
          const response = await api.post("/register", credentials, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(
            error.response?.data || error.message,
          );
        }
    }
)

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async(credentials,thunkAPI) => {
    try {
      const response = await api.post("/login", credentials);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
)

const initialState = {
    user:null,
    loading:false,
    error:null,
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
      .addCase(registerUser.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        ((state.user = action.payload), (state.loading = false));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      })

      // Login
      .addCase(loginUser.pending,(state)=>{
        state.loading = true,
        state.error=null
      })
      .addCase(loginUser.fulfilled,(state,action)=>{
        state.loading = false,
        state.error = action.payload,
        state.user = action.payload
      })
      .addCase(loginUser.rejected,(state,action)=>{
        state.loading = false,
        state.error = action.payload,
        state.user = null
      })
  }
});

export const {clearAuthState} = authSlice.actions;
export default authSlice.reducer;
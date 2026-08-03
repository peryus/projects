import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserFromServer } from "../api/getUserFromServer";

export const fetchUser = createAsyncThunk(
    "user/fetchUser",

    async (userId, { rejectWithValue }) => {
      try {
        return await getUserFromServer(userId);
      } catch (error) {
        console.error(error);

        return rejectWithValue("Failed to load user");
      }
    },
);

const initialState = {
  data: null,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
        .addCase(fetchUser.pending, (state) => {
          state.loading = true;
          state.error = "";
        })

        .addCase(fetchUser.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })

        .addCase(fetchUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || "Failed to load user";
        });
  },
});

export const selectUser = (state) => state.user.data;

export const selectUserLoading = (state) => state.user.loading;

export const selectUserError = (state) => state.user.error;

export default userSlice.reducer;
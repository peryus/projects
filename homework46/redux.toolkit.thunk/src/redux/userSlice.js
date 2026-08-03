import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserFromServer } from "../api/getUserFromServer";

export const fetchUser = createAsyncThunk(
    "user/fetchUser",

    async (userId, { rejectWithValue }) => {
      try {
        const user = await getUserFromServer(userId);

        return user;
      } catch (error) {
        console.error(error);

        return rejectWithValue("Failed to load user");
      }
    },
);

const initialState = {
  data: null,
  status: "idle",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    clearUser: (state) => {
      state.data = null;
      state.status = "idle";
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
        .addCase(fetchUser.pending, (state) => {
          state.status = "loading";
          state.error = "";
        })

        .addCase(fetchUser.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.data = action.payload;
          state.error = "";
        })

        .addCase(fetchUser.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload || "Failed to load user";
        });
  },
});

export const { clearUser } = userSlice.actions;

export const selectUser = (state) => state.user.data;

export const selectUserStatus = (state) => state.user.status;

export const selectUserLoading = (state) =>
    state.user.status === "loading";

export const selectUserError = (state) => state.user.error;

export default userSlice.reducer;
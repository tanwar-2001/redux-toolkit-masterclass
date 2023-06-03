import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 1,
};

export const fetchUserAccount = createAsyncThunk(
  "account/getUser",
  async (Id) => {
    const { data } = await axios.get(`http://localhost:8080/account/${Id}`);
    return data.amount;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserAccount.fulfilled, (state, action) => {
      state.amount = action.payload;
      state.pending = false;
    });
    builder.addCase(fetchUserAccount.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchUserAccount.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
    });
  },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;

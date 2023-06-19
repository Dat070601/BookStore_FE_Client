import { createSlice } from "@reduxjs/toolkit";
import { orderHistoryState } from "../initialState/OrderHistory";
import { fetchOrderHistoryForCustomerAsyncThunk } from "../thunks/OrderHistoryThunk";

const orderHistorySlice = createSlice({
  name: "order-history",
  initialState: orderHistoryState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrderHistoryForCustomerAsyncThunk.fulfilled, (state, action) => {
      state.orderHistories = action.payload
    })
  }
})

export const orderHistoryReducer = orderHistorySlice.reducer
export const orderHistorySelector = (state) => state.orderHistoryReducer
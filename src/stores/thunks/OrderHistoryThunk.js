import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrderHistoryForCustomerAsync } from "../../api/orderHistory";
import { URL } from "../../constant";

export const fetchOrderHistoryForCustomerAsyncThunk = createAsyncThunk("order-history", async (payload) => {
  const { token } = payload
  const response = await fetchOrderHistoryForCustomerAsync(URL, { token })
  return response
}) 
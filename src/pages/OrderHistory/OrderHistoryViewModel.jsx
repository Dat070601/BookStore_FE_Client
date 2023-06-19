import React from 'react'
import OrderAccordion from '../../components/OrderHistory/OrderAccordion/OrderAccordion'
import { useDispatch, useSelector } from 'react-redux'
import { orderHistorySelector } from '../../stores/reducers/OrderHistoryReducer'
import { useEffect } from 'react'
import { fetchOrderHistoryForCustomerAsyncThunk } from '../../stores/thunks/OrderHistoryThunk'
import useLocalStorage from '../../hooks/useLocalStorage'

const OrderHistoryViewModel = () => {

  const dispatch = useDispatch()
  const { orderHistories } = useSelector(orderHistorySelector)
  const { get } = useLocalStorage()

  const accessToken = get({
    key: "accessToken"
  })
  
  useEffect(() => {
    dispatch(fetchOrderHistoryForCustomerAsyncThunk({
      token: accessToken
    }))
  }, [])

  return {
    orderHistories
  }
}

export default OrderHistoryViewModel
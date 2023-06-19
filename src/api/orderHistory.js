import axios from 'axios'

export const fetchOrderHistoryForCustomerAsync = async (url, { token }) => {
  try {
    const response = await axios.get(`${url}/api/Order/order-from-customer`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
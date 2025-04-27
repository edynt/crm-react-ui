import axios from 'axios';

const API_URL = 'http://localhost:3001/api/orders';

export const getOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data?.data;
};

export const createOrder = async (orderData: { product: string; quantity: number }) => {
  // Giả lập gọi API để tạo đơn hàng
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(orderData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error creating order');
  }

  return response.json(); // trả về dữ liệu đơn hàng mới tạo
};

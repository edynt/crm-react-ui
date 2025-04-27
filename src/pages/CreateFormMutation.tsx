// CreateOrderForm.tsx
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createOrder } from '../services/orderService';

const CreateOrderFormMutation = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  // Khởi tạo mutation với TanStack Query
  const mutation: any = useMutation({
    mutationFn: createOrder, // Hàm để gửi dữ liệu API
    onSuccess: (data) => {
      alert('Order created successfully!');
      console.log('Created Order:', data); // In thông tin đơn hàng đã tạo
    },
    onError: (error: Error) => {
      setError(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = { product, quantity };
    mutation.mutate(orderData); // Gửi dữ liệu đến API
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product:</label>
          <input
            type='text'
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            min='1'
          />
        </div>
        <button type='submit' disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Creating...' : 'Create Order'}
        </button>
        {mutation.isError && <p>Error: {mutation.error.message}</p>}
        {mutation.isSuccess && <p>Order created successfully!</p>}
      </form>
    </div>
  );
};

export default CreateOrderFormMutation;

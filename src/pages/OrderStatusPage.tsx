import React from "react";
import { useOrderStatus } from "../context/OrderStatusContext";

const OrderStatusPage = () => {
  const { status, setSubmitting, setSuccess, setError } = useOrderStatus();

  const handleSubmit = () => {
    setSubmitting();
    setTimeout(() => {
      setSuccess();
    }, 2000); // Giả lập trạng thái thành công sau 2 giây
  };

  const handleError = () => {
    setSubmitting();
    setTimeout(() => {
      setError();
    }, 2000); // Giả lập trạng thái lỗi sau 2 giây
  };

  return (
    <div>
      <h2>Order Status: {status}</h2>
      <button onClick={handleSubmit}>Submit Order</button>
      <button onClick={handleError}>Simulate Error</button>
    </div>
  );
};

export default OrderStatusPage;

import React from "react";
import { useOrderStatus } from "../context/OrderStatusContext";

const OrderStatus = () => {
  const { status } = useOrderStatus();

  return (
    <div>
      {status === "submitting" && <p>Đang gửi đơn hàng...</p>}
      {status === "success" && <p>Đơn hàng đã được gửi thành công!</p>}
      {status === "error" && <p>Đã xảy ra lỗi khi gửi đơn hàng.</p>}
    </div>
  );
};

export default OrderStatus;

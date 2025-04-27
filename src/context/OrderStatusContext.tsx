import { createContext, useState, useContext, ReactNode } from "react";

const OrderStatusContext = createContext<any>(null);

export const OrderStatusProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState("idle");

  const setSubmitting = () => setStatus("submitting");
  const setSuccess = () => setStatus("success");
  const setError = () => setStatus("error");

  return (
    <OrderStatusContext.Provider value={{ status, setSubmitting, setSuccess, setError }}>
      {children}
    </OrderStatusContext.Provider>
  );
};

export const useOrderStatus = () => useContext(OrderStatusContext);
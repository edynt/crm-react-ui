import { useQuery } from '@tanstack/react-query';
import { getOrders } from '../services/orderService'; // file riêng gọi API

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  });
};
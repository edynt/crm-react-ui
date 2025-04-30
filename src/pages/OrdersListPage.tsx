import { useOrders } from '../hooks/useOrders';
import { useDebounceValue } from '../hooks/useDebounceValue';
import { useState } from 'react';
import { TextField, CircularProgress } from '@mui/material';

const OrdersListPage = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounceValue(search, 500);

  const { data: orders, isLoading } = useOrders();

  const filteredOrders = orders?.filter((order: any) => {
    return order.customerName.toLowerCase().includes(debouncedSearch.toLowerCase())
  }
  );

  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <h2>Danh sách đơn hàng</h2>
      <TextField
        label="Tìm kiếm khách hàng"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredOrders?.map((order:any) => (
          <li key={order.id}>{order.customerName} - {order.total} VNĐ</li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersListPage;

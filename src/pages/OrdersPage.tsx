import { getOrders } from '../services/orderService';
import OrderCard from '../components/OrderCard';
import { Container, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const OrdersPage = () => {
  const { data: orders, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  });

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant='h4' gutterBottom>
        Order Management
      </Typography>
      {orders?.map((order: any) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </Container>
  );
};

export default OrdersPage;

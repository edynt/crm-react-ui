import { Card, CardContent, Typography } from '@mui/material';
import { Order } from '../types/order';

interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{order.customerName}</Typography>
        <Typography variant="body2">Total: ${order.totalAmount}</Typography>
        <Typography variant="body2">Status: {order.status}</Typography>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
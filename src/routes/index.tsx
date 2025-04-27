import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrdersPage from '../pages/OrdersPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<OrdersPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
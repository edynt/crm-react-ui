import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { OrderStatusProvider } from "./context/OrderStatusContext";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import ThemePage from "./pages/ThemePage";
import CartPage from "./pages/CartPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import CreateOrderForm from './pages/CreateOrderForm';
import TestPage from "./pages/TestPage"; // Import TestPage
import TestDeferredPage from "./pages/TestDeferredPage"; // Import TestPage
import TestTransitionPage from "./pages/TestTransitionPage"; // Import TestPage
import CreateOrderFormMutation from "./pages/CreateFormMutation"; // Import TestPage
import CreateOrderPage from "./pages/CreateOrderPage"; // Import TestPage
import OrdersListPage from "./pages/OrdersListPage"; // Import TestPage

const AppRoutes = () => (
  <Router>
    <UserProvider>
      <ThemeProvider>
        <CartProvider>
          <OrderStatusProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user-profile" element={<UserProfilePage />} />
              <Route path="/theme" element={<ThemePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/order-status" element={<OrderStatusPage />} />
              <Route path="/create-order" element={<CreateOrderForm />} />
              <Route path="/test" element={<TestPage />} /> {/* Add route for TestPage */}
              <Route path="/test-deferred" element={<TestDeferredPage />} /> {/* Add route for TestDeferredPage */}
              <Route path="/test-transition" element={<TestTransitionPage />} /> {/* Add route for TestDeferredPage */}
              <Route path="/test-create-form-mutation" element={<CreateOrderFormMutation />} /> {/* Add route for TestDeferredPage */}
              <Route path="/test-custom-create-order" element={<CreateOrderPage />} /> {/* Add route for TestDeferredPage */}
              <Route path="/test-custom-get-orders" element={<OrdersListPage />} /> {/* Add route for TestDeferredPage */}
            </Routes>
          </OrderStatusProvider>
        </CartProvider>
      </ThemeProvider>
    </UserProvider>
  </Router>
);

export default AppRoutes;

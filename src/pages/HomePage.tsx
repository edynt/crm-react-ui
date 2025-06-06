import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Order Management System</h1>
      <div>
        <h2>Navigate to:</h2>
        <ul>
          <li><Link to="/user-profile">User Profile</Link></li>
          <li><Link to="/theme">Theme Settings</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/order-status">Order Status</Link></li>
          <li><Link to="/create-order">Create Order</Link></li>
          <li><Link to="/test">Test Page</Link></li>
          <li><Link to="/test-deferred">TestDeferredPage</Link></li>
          <li><Link to="/test-transition">TestTransitionPage</Link></li>
          <li><Link to="/test-create-form-mutation">test-create-form-mutation</Link></li>
          <li><Link to="/test-custom-create-order">Test Create Order</Link></li>
          <li><Link to="/test-custom-get-orders">Test Get Order</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

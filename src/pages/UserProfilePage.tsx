import React from "react";
import { useUser } from "../context/UserContext";

const UserProfilePage = () => {
  const { user, updateUser } = useUser();

  const handleUpdateUser = () => {
    updateUser({ name: "Jane Doe", email: "jane@example.com" });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
};

export default UserProfilePage;
import { createContext, useContext, ReactNode, useState } from "react";

// Tạo context cho user
const UserContext = createContext<any>(null);

// Tạo Provider cho context
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({ name: "John Doe", email: "john@example.com" });

  const updateUser = (newUser: any) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook để sử dụng context trong các component
export const useUser = () => useContext(UserContext);
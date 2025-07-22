"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
  accessToken?: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (data: User) => {
    localStorage.setItem("logged_user", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => setUser(null);

  useEffect(() => {
    const loggedUser = JSON.parse(
      localStorage.getItem("logged_user")!
    ) as User | null;

    if (!loggedUser) {
      return;
    }

    console.log({ loggedUser });

    login(loggedUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error("useUser must be used within a UserProvider");

  return context;
};

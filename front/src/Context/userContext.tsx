"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  userId: string | null;
  setUserId: (id: string | null) => void;
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  console.log("userid from usecontext", userId);

  const addToWishlist = (productId: string) => {
    setWishlist((prev) => [...prev, productId]);
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  return (
    <UserContext.Provider
      value={{ userId, setUserId, wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

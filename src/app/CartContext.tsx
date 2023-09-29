"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define a type for your cart item to match your Mongoose schema
export type CartItem = {
  brand: string;
  id: string;
  productName: string;
  price: number;
  quantity: number;
  user: string; // Replace with the appropriate user type (e.g., mongoose.Schema.Types.ObjectId)
  cartItems: string[]; // Replace with the appropriate cartItems type (e.g., mongoose.Schema.Types.ObjectId[])
  totalPrice: number;
  cartStatus: string;
};

// Define the context type
type CartContextType = {
  cart: CartItem[]; // Explicitly set the type for cart
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItemQuantity: (itemId: string, newQuantity: number) => void;
};

// Define the props type for CartProvider
type CartProviderProps = {
  children: ReactNode; // ReactNode allows any valid JSX content
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (item: CartItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      updateCartItemQuantity(item.id, existingItem.quantity + item.quantity);
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateCartItemQuantity = (itemId: string, newQuantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === itemId
          ? newQuantity === 0
            ? null
            : { ...item, quantity: newQuantity }
          : item
      );

      return updatedCart.filter((item) => item !== null) as CartItem[];
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

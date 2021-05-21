import { createContext, ReactNode, useState } from 'react';

export interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextData {
  items: CartItem[];
  addItem: (item: CartItem) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(item: CartItem) {
    if (items.find(it => it.id === item.id)) {
      const newItems = items.map(it =>
        it.id === item.id
          ? { ...it, quantity: item.quantity + it.quantity }
          : it,
      );
      setItems(newItems);
    } else {
      setItems([...items, item]);
    }
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

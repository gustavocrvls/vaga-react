import { createContext, ReactNode, useState } from 'react';

export interface CartItem {
  id: number;
  quantity: number;
}

interface BagContextData {
  total: number;
  items: CartItem[];
  addItem: (item: CartItem, price: number) => void;
}

interface BagProviderProps {
  children: ReactNode;
}

export const BagContext = createContext({} as BagContextData);

export function BagProvider({ children }: BagProviderProps): JSX.Element {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  function addItem(item: CartItem, price: number) {
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
    setTotal(total + price * item.quantity);
  }

  return (
    <BagContext.Provider
      value={{
        items,
        addItem,
        total,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}

import { createContext, ReactNode, useState } from 'react';

export interface ICartItem {
  id: number;
  quantity: number;
}

export interface IPayment {
  cardNumber: string;
  cardHolder: string;
  secutiryDigits: number;
  validity: Date;
  plots: number;
}

interface BagContextData {
  total: number;
  items: ICartItem[];
  payment: IPayment;
  addItem: (item: ICartItem, price: number) => void;
  setPayment: (payment: IPayment) => void;
  setItems: (items: ICartItem[]) => void;
}

interface BagProviderProps {
  children: ReactNode;
}

export const BagContext = createContext({} as BagContextData);

export function BagProvider({ children }: BagProviderProps): JSX.Element {
  const [items, setItems] = useState<ICartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState<IPayment>({} as IPayment);

  function addItem(item: ICartItem, price: number) {
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
        total,
        payment,
        addItem,
        setPayment,
        setItems,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}

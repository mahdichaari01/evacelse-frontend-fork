"use client";

import { CartLayout } from "./CartLayout";
import { useStoreContext } from "@/app/store/context";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { ScrollableBox } from "@/components";

export const Cart = () => {
  const context = useStoreContext();
  const proceedToCheckout = () => {
    console.log("todo");
  };

  return (
    <CartLayout
      checkout={context.items.length > 0 ? proceedToCheckout : undefined}
      emptyCart={context.items.length > 0 ? context.clearCart : undefined}
    >
      {context.items.length === 0 ? (
        <EmptyCart />
      ) : (
        <ScrollableBox className="w-full h-full">
          <ul className="w-full flex flex-col gap-3">
            {context.items.map((item) => (
              <CartItem
                removeFromCart={() => context.removeItem(item.id)}
                data={item}
                key={item.id}
              />
            ))}
          </ul>
        </ScrollableBox>
      )}
    </CartLayout>
  );
};

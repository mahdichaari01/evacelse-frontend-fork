import { Button } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { CreditCardIcon } from "@/components/icons";

export const CartLayout = (
  props: PropsWithChildren<{ checkout?: () => void; emptyCart?: () => void }>,
) => (
  <div className="ui-part flex flex-col justify-between items-center py-8 px-4 gap-3 rounded-xl">
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-center">Votre Panier</h2>

      <button
        className={`btn btn-secondary rounded-full btn-xs mt-2 ${
          props.emptyCart === undefined ? "btn-disabled" : ""
        }`}
        onClick={props.emptyCart}
      >
        clear cart
      </button>
    </div>
    {props.children}
    <Button
      onClick={props.checkout}
      colorScheme={"teal"}
      py={"1.5rem"}
      gap={"0.4rem"}
      isDisabled={props.checkout === undefined}
    >
      <CreditCardIcon />
      <span>Confirmer la commande</span>
    </Button>
  </div>
);

import Image from "next/image";
import EmptyCartImg from "./EmptyCart.png";
export function EmptyCart() {
  return (
    <div className="flex mx-auto w-full max-w-[15.5625rem] flex-col items-center justify-center gap-7 p-2">
      <div className="w-[8.375rem] relative">
        <Image
          fill={false}
          // className="object-contain"
          alt="Empty Cart"
          src={EmptyCartImg}
          priority={true}

          // src={"/EmptyCart.png"}
          // width={}
        />
      </div>
      <p className="text-center text-sm font-normal not-italic text-darks-mid">
        Votre panier est vide commencer par ajouter un pack
      </p>
    </div>
  );
}

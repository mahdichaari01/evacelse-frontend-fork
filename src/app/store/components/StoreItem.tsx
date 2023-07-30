"use client";
import { CartIcon, EyeIcon, RemoveIcon } from "@/components/icons";
import { IStoreItem } from "@/app/store/types";
import { useStoreItemContext } from "@/app/store/context";
import { RelativeLink } from "@/lib/RelativeLink";

export function StoreItem(props: { data: IStoreItem }) {
  const { data } = props;
  const { added, add, remove } = useStoreItemContext(data);
  return (
    <div className="h-fit w-full max-w-lg shadow-md flex flex-col items-center gap-10 rounded-xl bg-base-100 py-5 pt-7 px-[1.25rem] overflow-hidden">
      <div className="w-full flex flex-col items-center gap-5">
        <div className="h-fit text-2xl font-bold text-primary text-center">
          {data.price === 0 ? (
            "Gratuit"
          ) : (
            <>
              {data.price}
              <sup>DT</sup>
            </>
          )}
        </div>
        <div className="text-center text-4xl font-bold">{data.name}</div>
      </div>

      <div className="btn-group rounded w-full ">
        <AlteredStoreItemButton
          className="btn-outline outline-2"
          href={`${data.id}`}
        >
          <EyeIcon className="w-5 h-5" />
          <div>Plus de details</div>
        </AlteredStoreItemButton>
        {added ? (
          <AlteredStoreItemButton
            onClick={remove}
            className="btn-outline btn-neutral  outline-2"
          >
            <RemoveIcon className="w-5 h-5" />
            <div>retirer au panier</div>
          </AlteredStoreItemButton>
        ) : (
          <AlteredStoreItemButton onClick={add}>
            <CartIcon className="w-5 h-5" />
            <div>ajouter au panier</div>
          </AlteredStoreItemButton>
        )}
      </div>
    </div>
  );
}

export function AlteredStoreItemButton(
  props: {
    children: React.ReactNode;
    className?: string;
  } & (
    | {
        onClick: () => void;
      }
    | {
        href: string;
      }
  ),
) {
  const { children, className } = props;
  const CommonProps = {
    className: `btn-primary btn ${
      className ? className : ""
    } flex flex-row justify-center items-center min-h-0 text-left leading-none align-middle w-full flex-grow gap-1 flex-shrink rounded-sm px-3 sm:px-[.9375rem] py-[.625rem] h-fit text-[.5rem] sm:text-[.625rem] font-medium normal-case flex-nowrap `,
    children: children,
  };
  if ("onClick" in props) {
    return <button {...CommonProps} onClick={props.onClick} />;
  }
  return <RelativeLink {...CommonProps} href={props.href} />;
}

"use client";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

const UserMenu = () => {
  const { status, data } = useSession();
  return (
    <Menu
      placement="bottom-end"
      closeOnSelect={false}
      isLazy={true}
      id={"UserMenu"}
    >
      <MenuButton className="shrink-0">
        <div className="flex flex-row items-center gap-2 shrink-0">
          {status === "loading" ? (
            <></>
          ) : (
            <div className="font-bold text-darks-mid text-base leading-none flex flex-col items-end">
              <div className="font-medium">Welcome</div>

              <div>{data?.user?.name || "Back!"}</div>
            </div>
          )}

          <Avatar
            name={
              status === "loading"
                ? ""
                : `${data?.user?.name || "Generic User"}`
            }
            icon={<></>}
            borderRadius={"md"}
            src={data?.user?.image || undefined}
            bg={"linear-gradient(9.05deg, #FDF967 -23.87%, #FFD248 121.02%)"}
            size="md"
          >
            {status === "loading" ? <Spinner /> : undefined}
          </Avatar>
        </div>
      </MenuButton>
      <MenuList>
        <MenuItem
        // onClick={() => {
        //   navigate("/profile");
        // }}
        >
          Profile
        </MenuItem>
        <MenuItem
        // onClick={() => {
        //   setLoadingLogout(true);
        //   logout();
        // }}
        >
          {/*{loadingLogout ? "Au revoir 👋" : "Deconnécter"}*/}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;

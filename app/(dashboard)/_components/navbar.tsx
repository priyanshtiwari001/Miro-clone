"use client";
import { UserButton } from "@clerk/nextjs";
import { SearchInput } from "./search-inputbar";
import { OrganizationSwitcher, useOrganization } from "@clerk/nextjs";
import InviteButton from "./invite-button";
const Navbar = () => {
  const { organization } = useOrganization();

  return (
    <div className=" flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                border: "2px solid #E5E7EB",
                borderRadius: "8px",
                width: "100%",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      {organization && <InviteButton />}

      <UserButton />
    </div>
  );
};
export default Navbar;

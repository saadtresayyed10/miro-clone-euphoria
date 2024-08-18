"use client";

import {
  OrganizationSwitcher,
  useOrganization,
  UserButton,
} from "@clerk/nextjs";
import SearchInput from "./search-input";
import InviteButton from "./invite-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const { organization } = useOrganization();

  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
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
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      {organization && <InviteButton />}
      <UserButton />
      <Button
        asChild
        size="sm"
        variant="ghost"
        className="text-xs hover:underline duration-300"
      >
        <Link href="https://sayyedsaad.vercel.app/" target="_blank">
          Portfolio
        </Link>
      </Button>
    </div>
  );
};

export default Navbar;

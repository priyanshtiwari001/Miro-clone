"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const OrgSideBar = () => {
  const searchparams = useSearchParams();
  const favorties = searchparams.get("favorites");
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pt-5 pl-5 ">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="logo" width={60} height={60} />
          <span className={cn("font-semibold text-2xl", poppins.className)}>
            Collabe
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
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
      <div className="space-y-2 w-full ">
        <Button
          variant={favorties ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="flex justify-start px-2 w-full"
        >
          <Link href="/">
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Team boards
          </Link>
        </Button>
        <Button
          variant={favorties ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="flex justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: "/",
              query: { favorites: true },
            }}
          >
            <Star className="w-5 h-5 mr-2" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default OrgSideBar;

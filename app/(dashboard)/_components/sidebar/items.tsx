"use client";

import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import { Hint } from "@/components/hint";
interface ItemProps {
  id?: string;
  name: string;
  imageUrl: string;
}
const Items = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;
  const onClick = function () {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative ">
      <Hint label={name} sideOffSet={18} alignOffSet={18} side="right">
        <Image
          fill
          alt={name}
          src={imageUrl}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition ",
            isActive && "opacity-100"
          )}
          onClick={onClick}
        />
      </Hint>
    </div>
  );
};
export default Items;

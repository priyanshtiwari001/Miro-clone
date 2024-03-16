import { Button } from "@/components/ui/button";
import { ubuntu } from "@/lib/fonts";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import { CreateOrganization } from "@clerk/nextjs";

export const EmptyOrg = () => {
  return (
    <div
      className={cn(
        "h-full flex-col flex justify-center items-center",
        ubuntu.className
      )}
    >
      <Image src="/element.svg" width={350} height={350} alt="empty-org-img" />
      <h2 className="text-2xl font-normal mt-6">Welcome to the Board!</h2>
      <p className="text-muted-foreground my-2">
        Create an Organization to get started!
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg">Create Organization</Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[480px] ">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};

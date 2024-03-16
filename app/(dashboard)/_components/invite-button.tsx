import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Plus className="h-4 w-4 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="flex lg:block items-center justify-center p-0 bg-transparent border-none max-w-[880px]  w-[83%]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};
export default InviteButton;

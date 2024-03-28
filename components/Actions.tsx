"use client";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { FilePenLine, Link2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import ConfirmModal from "./confirm-modal";
import { Button } from "./ui/button";
import RenameModals from "./modal";

interface ActionsProps {
  children: ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffSet?: DropdownMenuContentProps["sideOffset"];
  id: any;
  title: string;
}

// const initalState = {
//   ID: "",
//   title: "",
// };

// function reducer(state: any, action: any): void {}

const Actions = ({ children, side, sideOffSet, id, title }: ActionsProps) => {
  //const [state, dispatch] = useReducer(reducer, initalState);
  const trash = useMutation(api.board.remove);
  const onDelete = () => {
    trash({ id })
      .then(() => toast.success("Board deleted"))
      .catch(() => toast.error("Failed to delete board"));
  };

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(function success() {
        toast.success("Link copied!");
      })
      .catch(function fail() {
        toast.error("Failed to copy link!");
      });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffSet}
        className="w-50   rounded-lg"
      >
        <DropdownMenuItem onClick={onCopyLink}>
          <Link2 className="w-4 h-4 mr-2" />
          Copy Link
        </DropdownMenuItem>
        <ConfirmModal
          onConfirm={onDelete}
          title="are you absloutely sure?"
          description="  This action cannot be undone. This will permanently delete your
            board and remove your board from your account."
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-normal font-normal"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </ConfirmModal>

        <RenameModals title={title} id={id}>
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-normal font-normal"
          >
            <FilePenLine className="w-4 h-4 mr-2" />
            Rename
          </Button>
        </RenameModals>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Actions;

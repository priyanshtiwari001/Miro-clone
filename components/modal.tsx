"use client";
import React, { use, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface RenameModals {
  children: React.ReactNode;
  title: string;
  id: any;
}
const RenameModals = ({ children, title, id }: RenameModals) => {
  const update = useMutation(api.board.update);
  const [titles, setTitles] = React.useState(title);
  const [ids, setIds] = useState(id);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleSubmit = () => {
    update({
      id: ids,
      title: titles,
    })
      .then(function success() {
        toast.success("board name is updated!");
      })
      .catch(function fail() {
        toast.error("board name is not updated!");
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle className="font-medium mb-4">
          Are you sure to change your board name?
        </DialogTitle>
        <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
          <Input
            className="rounded-sm h-7 "
            value={titles}
            onChange={(e) => setTitles(e.target.value)}
            placeholder="board.."
          />
          <Button type="submit">Confirm</Button>
          <Button variant="outline">Cancel</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default RenameModals;

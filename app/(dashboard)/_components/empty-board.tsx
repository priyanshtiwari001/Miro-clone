"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { ubuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { toast } from "sonner";

export default function EmptyBoard() {
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);
  const onClicker = () => {
    if (!organization) return;
    create({
      orgId: organization.id,
      title: "untitled",
    })
      .then(function succes() {
        toast.success("Board created 🥳!");
      })
      .catch(function fail() {
        toast.error("Failed to create the board 😟!");
      });
  };
  return (
    <div
      className={cn(
        "h-full flex flex-col items-center justify-center",
        ubuntu.className
      )}
    >
      <Image
        src="/empty-board-note.svg"
        alt="empty-board-note-svg"
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-normal mt-6">Create your first board!</h2>
      <p className="text-muted-foreground my-2 ">
        Start by creating your own organization
      </p>
      <Button className="mt-2" size="lg" onClick={onClicker}>
        Create Board
      </Button>
    </div>
  );
}

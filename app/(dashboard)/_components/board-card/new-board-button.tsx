import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { ubuntu } from "@/lib/fonts";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { toast } from "sonner";
interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}
const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const create = useMutation(api.board.create);
  const { organization } = useOrganization();
  const onClick = () => {
    if (!organization) return;
    create({
      orgId,
      title: "untitled",
    })
      .then(function success(id) {
        toast.success("Board created 🥳!");
        //to redirect to '/board/${id}'
      })
      .catch(function fail() {
        toast.error("Failed to create the board 😟!");
      });
  };
  return (
    <button
      disabled={disabled}
      className={cn(
        "col-span-1 aspect-[100/127] rounded-md bg-yellow-400 hover:bg-yellow-500 flex flex-col justify-center items-center p-6",
        disabled && "opacity-75 bg-yellow-500  cursor-not-allowed"
      )}
      onClick={onClick}
    >
      <div />
      <Plus className="w-10 h-10 text-white stroke-1 stroke-slate-700 rounded-md " />
      <p className={cn("text-xs text-slate-700 font-light", ubuntu.className)}>
        New board
      </p>
    </button>
  );
};
export default NewBoardButton;

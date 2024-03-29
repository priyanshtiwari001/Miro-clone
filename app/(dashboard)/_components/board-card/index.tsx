"use client";
import Link from "next/link";
import Image from "next/image";
import Overlay from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@clerk/nextjs";
import Footer from "./footer";
import Actions from "@/components/Actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";

interface BoardCardProps {
  key: string;
  id: string;
  authorId: string;
  authorName?: string;
  imageUrl: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
  title: string;
}
const BoardCard = ({
  key,
  id,
  title,
  authorId,
  authorName,
  imageUrl,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  const favorite = useMutation(api.board.favorite);
  const unfavorite = useMutation(api.board.unFavorite);

  const toggleFavorite = () => {
    if (isFavorite) {
      unfavorite({ id: id as Id<"boards"> }).catch(() =>
        toast.error("Failed to unfavorite your board")
      );
    } else {
      favorite({ id: id as Id<"boards">, orgId }).catch(() =>
        toast.error("Failed to favorite your board")
      );
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-md flex flex-col justify-between overflow-hidden  ">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} fill alt={title} className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute z-50 top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none ">
              <MoreHorizontal className=" text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          title={title}
          isFavorite={isFavorite}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavorite}
          disabled={false}
        />
      </div>
    </Link>
  );
};
export default BoardCard;

BoardCard.Skeleton = function BoardSkeleton() {
  return (
    <div className="aspect-[100/127]  rounded-md  overflow-hidden ">
      <Skeleton className="w-full h-full" />
    </div>
  );
};

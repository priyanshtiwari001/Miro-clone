"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import EmptyBoard from "./empty-board";
import EmptyFavorites from "./empty-favorites";
import EmptySearch from "./empty-search";
import BoardCard from "./board-card";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}
export default function BoardList({ orgId, query }: BoardListProps) {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return <div>Loading...</div>;
  }
  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data.length) {
    return <EmptyBoard />;
  }
  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorites Boards" : "Team board"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            authorId={board.authorId}
            authorName={board.authorName}
            imageUrl={board.imageUrl}
            createdAt={board._creationTime}
            ordId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
}

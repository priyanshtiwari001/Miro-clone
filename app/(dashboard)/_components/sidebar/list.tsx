"use client";
import { useOrganizationList } from "@clerk/nextjs";
import Items from "./items";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!userMemberships.data?.length) return null;
  return (
    <div className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <Items
          key={mem.organization.id}
          id={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
        />
      ))}
    </div>
  );
};
export default List;

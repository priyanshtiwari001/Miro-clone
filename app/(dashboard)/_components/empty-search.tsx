import { ubuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function EmptySearch() {
  return (
    <div
      className={cn(
        "h-full flex flex-col items-center justify-center",
        ubuntu.className
      )}
    >
      <Image
        src="/empty-search.svg"
        alt="empty-search-svg"
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-normal mt-6">No result found!</h2>
      <p className="text-muted-foreground my-2">
        Try to search something else!
      </p>
    </div>
  );
}

import { ubuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function EmptyFavorites() {
  return (
    <div
      className={cn(
        "h-full flex flex-col items-center justify-center",
        ubuntu.className
      )}
    >
      <Image
        src="/empty-favorties.svg"
        alt="empty-favorties-svg"
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-normal mt-6">No favorites found!</h2>
      <p className="text-muted-foreground my-2 ">
        Add some boards in your favorites!
      </p>
    </div>
  );
}

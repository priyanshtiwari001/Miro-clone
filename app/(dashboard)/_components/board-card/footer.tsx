import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
interface FooterProps {
  title: string;
  isFavorite: boolean;
  authorLabel?: string;
  createdAtLabel: string;
  onClick: () => void;
  disabled: boolean;
}
const Footer = ({
  title,
  isFavorite,
  authorLabel,
  createdAtLabel,
  onClick,
  disabled,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-45 transition-opacity text-[11px]  truncate">
        {authorLabel},{createdAtLabel}
      </p>
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 hover:text-yellow-500",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn(
            "h-4 w-4",
            isFavorite && "fill-yellow-400 text-yellow-400"
          )}
        />
      </button>
    </div>
  );
};
export default Footer;

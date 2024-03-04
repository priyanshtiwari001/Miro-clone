import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: "right" | "left" | "top" | "bottom";
  align?: "start" | "center" | "end";
  alignOffSet: number;
  sideOffSet: number;
}

export const Hint = ({
  label,
  children,
  side,
  align,
  alignOffSet,
  sideOffSet,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="text-white bg-black border-black "
          side={side}
          align={align}
          sideOffset={sideOffSet}
          alignOffset={alignOffSet}
        >
          <p className="font-semibold capitalize">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

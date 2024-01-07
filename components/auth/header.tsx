import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { HeaderProps } from "@/types/app";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-6xl font-semibold ", font)}>🔐Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

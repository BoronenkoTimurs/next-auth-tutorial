"use client";
import { LoginButtonProps } from "@/types/app";
import { useRouter } from "next/navigation";

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    if (mode === "redirect") {
      router.push("/auth/login");
    }
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

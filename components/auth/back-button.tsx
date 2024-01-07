"use client";

import { BackButtonProps } from "@/types/app";
import { Button } from "../ui/button";
import Link from "next/link";
const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant={"link"} className="w-full">
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;

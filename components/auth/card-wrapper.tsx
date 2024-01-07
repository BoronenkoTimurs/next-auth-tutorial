"use client";

import { CardWrapperProps } from "@/types/app";
import { Card, CardHeader, CardFooter, CardContent } from "../ui/card";
import { Header } from "./header";
import SocialMedia from "./social";

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <SocialMedia />
        </CardFooter>
      )}
    </Card>
  );
};

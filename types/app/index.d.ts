import { UserRole } from "@prisma/client";
import "next-auth";
export interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export interface HeaderProps {
  label: string;
}

export interface BackButtonProps {
  href: string;
  label: string;
}

export interface FormErrorProps {
  errorMsg: string | undefined;
}
export interface FormSuccessProps {
  successMsg: string | undefined;
}

declare module "next-auth" {
  interface User {
    role?: UserRole;
  }
  interface Session {
    user?: User;
  }
  interface JWT {
    role?: UserRole;
  }
}

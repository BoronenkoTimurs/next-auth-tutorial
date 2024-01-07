import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
const font = {
  subsets: ["latin"],
  weight: ["600"],
};
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-blue-500">
      <div className="text-center space-y-6">
        <h1 className={cn("text-6xl font-semibold text-white", font)}>
          🔐Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
const SocialMedia = () => {
  return (
    <div className="w-full flex flex-row gap-x-2 items-center">
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => console.log("Google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => {
          console.log("Gihub");
        }}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SocialMedia;

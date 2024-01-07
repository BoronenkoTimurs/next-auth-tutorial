import { CheckCircledIcon } from "@radix-ui/react-icons";
import { FormSuccessProps } from "@/types/app";
export const FormSuccess = ({ successMsg }: FormSuccessProps) => {
  if (!successMsg) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon />
      <p>{successMsg}</p>
    </div>
  );
};

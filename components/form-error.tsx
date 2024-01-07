import { FormErrorProps } from "@/types/app";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const FormError = ({ errorMsg }: FormErrorProps) => {
  if (!errorMsg) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon />
      <p>{errorMsg}</p>
    </div>
  );
};

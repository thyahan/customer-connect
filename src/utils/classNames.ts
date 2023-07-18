import clsx, { ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import tailwindConfig from "../../tailwind.config";

const twMerge = extendTailwindMerge({
  theme: tailwindConfig.theme,
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

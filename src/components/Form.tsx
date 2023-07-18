import { cn } from "@/utils/classNames";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export default function Form({ className, ...props }: Props) {
  return <form {...props} className={cn("flex flex-col gap-4", className)} />;
}

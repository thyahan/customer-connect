import { cn } from "@/utils/classNames";
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

type BaseInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = BaseInputProps & {
  label?: string;
  helper?: string;
  status?: "error" | "default";
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ status, helper, label, ...props }: Props, ref) => {
    const { id, className } = props;
    const cls = cn(
      "h-10 rounded-sm px-4 py-2 text-slate-800",
      status === "error" ? "outline outline-1 outline-red-500" : "",
      className,
    );

    return (
      <span className="flex flex-col gap-1">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input {...props} ref={ref} className={cls} />
        {helper ? <span className="text-sm">{helper}</span> : null}
      </span>
    );
  },
);

Input.displayName = "Input";

export default Input;

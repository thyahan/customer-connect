import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = {
  variant?: "primary" | "secondary";
};

type Props = BaseButtonProps & ButtonProps;

const colors = {
  primary: "bg-green-500",
  secondary: "bg-red-500",
};

export default function Button(props: Props) {
  const color = props.variant ? colors[props.variant] : "";

  return (
    <button
      {...props}
      className={"px-4 py-2 rounded-md text-white border border-white " + color}
    />
  );
}

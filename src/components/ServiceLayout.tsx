import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ServiceLayout({ children }: Props) {
  return (
    <div className="mx-auto flex h-screen min-w-[800px] max-w-[1600px] flex-1">
      {children}
    </div>
  );
}

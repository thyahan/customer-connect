import Content from "@/components/Content";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1280px] flex-1">
      <Content>{children}</Content>
    </div>
  );
}

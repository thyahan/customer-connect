export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[320px] flex-1 lg:max-w-[640px]">
      {children}
    </div>
  );
}

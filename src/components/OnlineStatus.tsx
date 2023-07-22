export default function OnlineStatus() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="h-3 w-3 rounded-full bg-green-500"></div>
      <div className="h-3 w-3 rounded-full bg-red-500"></div>
      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
    </div>
  );
}

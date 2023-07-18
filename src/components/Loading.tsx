import { LiaSpinnerSolid } from "react-icons/lia";

export default function Loading({ visible = true }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white bg-opacity-50">
      <LiaSpinnerSolid className="animate-spin text-5xl text-green-400" />
    </div>
  );
}

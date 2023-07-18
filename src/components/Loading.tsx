import { LiaSpinnerSolid } from "react-icons/lia";

export default function Loading({ visible = true }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-50 flex justify-center items-center">
      <LiaSpinnerSolid className="text-5xl text-green-400 animate-spin" />
    </div>
  );
}

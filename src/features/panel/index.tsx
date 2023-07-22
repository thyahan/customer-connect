import OnlineStatus from "@/components/OnlineStatus";
import { usePanelStore } from "@/features/panel/panel.store";
import { cn } from "@/utils/classNames";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";

export default function Panel() {
  const isOpen = usePanelStore((state) => state.isOpen);
  const toggleIsOpen = usePanelStore((state) => state.toggleIsOpen);

  return (
    <div
      className={cn(
        "relative bg-[#f4f5f7] text-[#42526e] shadow-md transition-all",
        isOpen ? "w-[320px] duration-100" : "w-[64px] duration-300",
      )}
    >
      {/* content */}
      <div
        className={cn(
          "z-10 flex h-[calc(100%-64px)] flex-col gap-4 p-4 transition-all",
          isOpen ? "w-full duration-500" : "invisible w-0 duration-100",
        )}
      >
        <p className="h-[100px] w-full rounded-md bg-gray-800 bg-opacity-20">
          Hello You Online
        </p>
        <p className="h-[64px] w-full rounded-md bg-gray-800 bg-opacity-20">
          Hello You Online
        </p>
        <p className="w-full flex-1 rounded-md bg-gray-800 bg-opacity-20">
          <OnlineStatus />
        </p>
      </div>

      {/* expand/collapse icon */}
      <div
        className={cn(
          "absolute bottom-0 right-0 z-20 flex h-[64px] w-[64px] items-center justify-center p-4",
        )}
      >
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content={isOpen ? "Minimize panel" : "Maximize panel"}
          onClick={toggleIsOpen}
          className="group flex h-full w-full items-center justify-center rounded-full hover:cursor-pointer hover:bg-[rgba(9,30,66,0.13)]"
        >
          <BsReverseLayoutSidebarReverse className="text-xl text-[#42526e] group-hover:text-[#344563]" />
        </a>
      </div>
    </div>
  );
}

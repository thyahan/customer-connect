import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PanelState {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const usePanelStore = create<PanelState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
      }),
      {
        name: "panel",
      },
    ),
  ),
);

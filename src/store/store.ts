import { create } from "zustand";

interface toggleSwitch {
  show: boolean;
  toggle: () => void;
}

export const useStoreBar = create<toggleSwitch>((set) => ({
  show: true,
  toggle: () =>
    set((state) => ({
      show: !state.show,
    })),
}));

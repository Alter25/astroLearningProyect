import { create } from "zustand";

interface StoreBar {
  show: boolean;
  toggle: () => void;
}
export const useStoreBar = create<StoreBar>((set) => ({
  show: false,
  toggle: () =>
    set((state) => ({
      show: !state.show,
    })),
}));

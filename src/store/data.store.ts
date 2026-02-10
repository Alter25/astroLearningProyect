import { create } from "zustand";

type sortType = "Latest" | "Oldest";

interface storeType {
  sort: sortType;
  setSort: (s: sortType) => void;
}

export const dataStore = create<storeType>((set) => ({
  sort: "Latest",
  setSort: (s: sortType) => set((state) => ({})),
}));

import { create } from "zustand";

interface Bullean {
  open: boolean;
  setOpen: () => void;
  selectedOption: string | null;
  setSelectedOption: (str: string) => void;
}

const useBullean = create<Bullean>((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),

  selectedOption: null,
  setSelectedOption: (str: string) => set(() => ({ selectedOption: str })),
}));

export default useBullean;

import { create } from "zustand";

interface Bullean {
  open: boolean;
  setOpen: () => void;
  selectedOption: string | number | null;
  setSelectedOption: (str: string | number) => void;

  // selectedRadio: number | null;
  // setSelectedRadio: (str: number)
}

const useBullean = create<Bullean>((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),

  selectedOption: null,
  setSelectedOption: (str: string | number) =>
    set(() => ({ selectedOption: str })),
}));

export default useBullean;

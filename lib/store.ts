import create from "zustand";
import { CartStateType } from "./types";

export const cartStateStore = create<CartStateType>((set) => ({
  open: false,
  setOpen: (val) => set(() => ({ open: val })),
}));


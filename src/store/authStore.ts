import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { UserDetailsProps } from "../../typings";

interface authStore {
  user: any;
  addUser: (newUser: UserDetailsProps) => void;
  removeUser: () => void;
}

export const useAuthStore = create<authStore>()(
  devtools(
    persist((set) => ({
      user: null,
      addUser: (newUser) => set({ user: newUser }),
      removeUser: () => set({ user: null }),
    }))
  )
);

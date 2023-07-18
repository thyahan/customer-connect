import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Profile = {
  name: string;
  email: string;
  phone: string;
};

interface ProfileState {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
}

export const useProfileStore = create<ProfileState>()(
  devtools(
    persist(
      (set) => ({
        profile: null,
        setProfile: (profile) => set({ profile }),
      }),
      {
        name: "profile",
      },
    ),
  ),
);

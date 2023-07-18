import { useProfileStore } from "@/features/profile/profile.store";
import { uniqueId } from "lodash";
import { useState } from "react";
import FormProfile from "./FormProfile";

export default function ProfileCreate() {
  const [key, setKey] = useState(uniqueId());
  const setProfile = useProfileStore((state) => state.setProfile);

  return (
    <FormProfile
      key={key}
      onSubmit={(profile) => {
        setProfile(profile);
        setKey(uniqueId());
      }}
    />
  );
}

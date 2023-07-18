import { useProfileStore } from "@/features/profile/profile.store";
import FormProfile from "./FormProfile";

export default function ProfileUpdate() {
  const profile = useProfileStore((state) => state.profile);
  const setProfile = useProfileStore((state) => state.setProfile);

  return <FormProfile profile={profile} onSubmit={setProfile} />;
}

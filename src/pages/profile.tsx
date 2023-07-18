import Layout from "@/components/Layout";
import dynamic from "next/dynamic";

const ProfileCreate = dynamic(
  () => import("@/features/profile/ProfileCreate"),
  { ssr: false },
);

const ProfileUpdate = dynamic(
  () => import("@/features/profile/ProfileUpdate"),
  { ssr: false },
);

export default function ProfilePage() {
  return (
    <Layout>
      <h1 className="my-8 text-5xl">Create</h1>
      <ProfileCreate />
      <h1 className="my-8 text-5xl">Update</h1>
      <ProfileUpdate />
    </Layout>
  );
}

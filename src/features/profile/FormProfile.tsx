import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";

type Profile = {
  name: string;
  email: string;
  phone: string;
};

type Props = {
  profile?: Profile | null;
  onSubmit: (profile: Profile) => void;
};

export default function FormProfile({ onSubmit, profile }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, (errors) => {
        console.error("errors: ", errors);
      })}
    >
      <Input
        label="Name"
        status={errors.name ? "error" : "default"}
        defaultValue={profile?.name}
        {...register("name", { required: true })}
      />
      <Input
        label="Email"
        status={errors.email ? "error" : "default"}
        defaultValue={profile?.email}
        {...register("email", { required: true })}
      />
      <Input
        label="Phone"
        status={errors.phone ? "error" : "default"}
        defaultValue={profile?.phone}
        {...register("phone", { required: true })}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
}

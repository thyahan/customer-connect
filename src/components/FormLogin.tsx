import Button from "@/components/Button";
import Loading from "@/components/Loading";

type User = {
  username: string;
  password: string;
};

type Props = {
  isLoading?: boolean;
  onSubmit: (user: User) => void;
};

export default function FormLogin(props: Props) {
  const isFormDisabled = !!props.isLoading;
  const isLoadingVisible = !!props.isLoading;

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-xl">Customer Connect</h1>
      <form
        className="flex w-[280px] flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();

          // (1) get value from form input
          const username = (e.target as any).username.value;
          const password = (e.target as any).password.value;

          // (2) reset form input
          (e.target as any).username.value = "";
          (e.target as any).password.value = "";

          // (3) call onSubmit function from props
          props.onSubmit({
            username,
            password,
          });
        }}
      >
        <span className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            disabled={isFormDisabled}
            className="rounded-md px-4 py-2 text-gray-500"
            id="username"
            type="text"
            placeholder="username"
          />
        </span>

        <span className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            disabled={isFormDisabled}
            className="rounded-md px-4 py-2 text-gray-500"
            id="password"
            type="password"
            placeholder="password"
          />
        </span>

        <Button
          disabled={isFormDisabled}
          variant="primary"
          className="rounded-md bg-green-300 px-4 py-2 text-white"
        >
          Login
        </Button>
      </form>

      <Loading visible={isLoadingVisible} />
    </div>
  );
}

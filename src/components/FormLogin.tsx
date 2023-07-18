import Button from "@/components/Button";

type Props = {
  onSubmit: (username: string, password: string) => void;
};

export default function FormLogin(props: Props) {
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col">
      <h1 className="mb-8 text-xl">Customer Connect</h1>
      <form
        className="flex flex-col gap-4 w-[280px]"
        onSubmit={(e) => {
          e.preventDefault();

          // (1) get value from form input
          const username = (e.target as any).username.value;
          const password = (e.target as any).password.value;

          // (2) reset form input
          (e.target as any).username.value = "";
          (e.target as any).password.value = "";

          // (3) call onSubmit function from props
          props.onSubmit(username, password);
        }}
      >
        <span className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            className="px-4 py-2 rounded-md text-gray-500"
            id="username"
            type="text"
            placeholder="username"
          />
        </span>

        <span className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="px-4 py-2 rounded-md text-gray-500"
            id="password"
            type="password"
            placeholder="password"
          />
        </span>

        <Button
          variant="primary"
          className="px-4 py-2 rounded-md bg-green-300 text-white"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

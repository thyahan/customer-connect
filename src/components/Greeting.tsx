import Button from "@/components/Button";

type Props = {
  username: string;
  onLogout: () => void;
};

export default function Greeting(props: Props) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 id="greeting-message">hello {props.username}</h1>
      <Button id="logout-button" variant="secondary" onClick={props.onLogout}>
        Logout
      </Button>
    </div>
  );
}

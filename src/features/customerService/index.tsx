import Conference from "@/features/conference";
import NoSession from "@/features/customerService/NoSession";
import Panel from "@/features/panel";

type Props = {
  sessionId: string;
};

export default function CustomerService({ sessionId }: Props) {
  return (
    <div className="flex h-full flex-1">
      {sessionId ? <Conference /> : <NoSession />}
      <Panel />
    </div>
  );
}

import ServiceLayout from "@/components/ServiceLayout";
import CustomerService from "@/features/customerService";
import { useRouter } from "next/router";

const getSessionIdFromParams = (params?: string | string[]): string => {
  if (typeof params === "undefined") return "";
  if (Array.isArray(params)) return params[0];
  return params;
};

export default function ServicePage() {
  const router = useRouter();
  const sessionId = getSessionIdFromParams(router.query.session_id);

  return (
    <ServiceLayout>
      <CustomerService sessionId={sessionId} />
    </ServiceLayout>
  );
}

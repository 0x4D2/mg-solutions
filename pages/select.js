import { useEffect } from "react";
import { useRouter } from "next/router";

export default function SelectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, []);

  return null;
}

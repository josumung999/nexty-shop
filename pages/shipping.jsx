import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../utils/Store";

export default function Shipping() {
  const router = useRouter();
  const {state} = useContext(Store);
  const { userInfo } = state;
  if (!userInfo) {
    router.push('/login/?redirect=/shipping');
  }

  return <div>Shipping Page</div>
}

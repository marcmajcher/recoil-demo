import { useRecoilValue } from "recoil";
import { countState } from "./atoms";

export default function Counter() {
  const count = useRecoilValue(countState);

  return <div>Count: {count}</div>;
}

import { useRecoilState } from 'recoil';
import { countState } from './atoms';

export default function CounterButton() {
  const [count, setCount] = useRecoilState(countState);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>Make Number Go Up</button>;
}

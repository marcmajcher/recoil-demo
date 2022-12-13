import { useSetRecoilState } from 'recoil';
import { countState } from './atoms';

export default function ResetButton() {
  const setCount = useSetRecoilState(countState);

  function resetCounter() {
    setCount(0);
  }

  return <button onClick={resetCounter}>Reset</button>;
}

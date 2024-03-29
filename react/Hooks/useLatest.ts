// 可以随时确保获取的是最新值，并且也可以解决闭包问题

import { useRef } from 'react';

const useLatest = <T>(value: T) => {
  const ref = useRef(value)
  ref.current = value

  return ref
};

export default useLatest;

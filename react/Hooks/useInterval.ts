import { useEffect } from 'react'
import useLatest from './useLatest'

const useInterval = (fn: () => void, delay?: number, immediate?:boolean) => {
  const fnRef = useLatest(fn)

  useEffect(() => {
    if (!delay || delay < 0) return
    if (immediate) fnRef.current()

    const timer = setInterval(() => {
      fnRef.current()
    }, delay)

    return () => clearInterval(timer)
  }, [delay])
}

export default useInterval
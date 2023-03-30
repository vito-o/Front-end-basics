import { useEffect } from 'react'

export default function useWindowScrollWatch(scrollCallback) {
  useEffect(() => {
    document.addEventListener('scroll', scrollCallback);
    return () => {
      document.removeEventListener('scroll', scrollCallback)
    }
  }, [])
}
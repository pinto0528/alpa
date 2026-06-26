import { useState, useEffect } from 'react'

export default function useRouter() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function navigate(url) {
    window.history.pushState({}, '', url)
    setPath(url)
  }

  return [path, navigate]
}

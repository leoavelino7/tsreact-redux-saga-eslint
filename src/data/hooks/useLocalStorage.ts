import { useState } from 'react'

export function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      console.log(err)
      return initialValue
    }
  })

  function setValue(valueToStore: string): void {
    try {
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (err) {
      console.log(err)
    }
  }

  return [storedValue, setValue]
}

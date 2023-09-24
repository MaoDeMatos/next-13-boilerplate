import { useState } from 'react'

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (x: T) => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return `initialValue`
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return `initialValue`
      console.warn(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value: T): void => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.warn(error)
    }
  }

  return [storedValue, setValue]
}

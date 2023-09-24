'use client'

import useLocalStorage from '../hooks/useLocalStorage'

export type AppState = {}

const defaultAppState: AppState = {}

// Replace by a real state management solution
export const useAppState = () => useLocalStorage('appState', defaultAppState)

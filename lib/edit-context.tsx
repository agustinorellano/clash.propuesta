'use client'

import { createContext, useContext } from 'react'

export interface EditContextValue {
  /** Whether the user is currently in edit mode */
  editMode: boolean
  /** Returns the overridden text for (sectionId, key), or `fallback` if not set */
  getContent: (sectionId: string, key: string, fallback: string) => string
  /** Saves an edited value for (sectionId, key) */
  setContent: (sectionId: string, key: string, value: string) => void
}

/** Default context — view mode only, no editing */
const defaultValue: EditContextValue = {
  editMode: false,
  getContent: (_s, _k, fallback) => fallback,
  setContent: () => {},
}

export const EditContext = createContext<EditContextValue>(defaultValue)

export function useEditContext() {
  return useContext(EditContext)
}

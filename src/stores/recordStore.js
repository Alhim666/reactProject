import { create } from 'zustand'
import fetchData from '../services/dataService'

const useRecordStore = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  fetchData: async () => {
    set({ isLoading: true, error: null })
    try {
      const data = await fetchData()
      set({ data, isLoading: false })
    } catch (error) {
      set({ error, isLoading: false })
    }
  },
  addRecord: async (url, record) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      })

      if (!response.ok) {
        throw new Error(`HTTP error. Status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Fetch error:', error)
      throw error
    }
  },
}))

export default useRecordStore

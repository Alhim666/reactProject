import { useState, useEffect } from 'react'
import useRecordStore from '../stores/recordStore'

const useLeaderboardData = () => {
  const [leaderboardData, setLeaderboardData] = useState([])
  const { data, isLoading, fetchData, error } = useRecordStore()

  useEffect(() => {
    setLeaderboardData(data)
  }, [data])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { leaderboardData, isLoading, error, setLeaderboardData }
}

export default useLeaderboardData

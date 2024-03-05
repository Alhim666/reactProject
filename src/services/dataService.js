const fetchData = async () => {
  try {
    const response = await fetch('db.json')

    if (!response.ok) {
      throw new Error(`Network response was not ok, status: ${response.status}`)
    }

    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

export default fetchData

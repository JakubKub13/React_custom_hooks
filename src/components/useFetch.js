import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    const fetchCoordinates = async () => {
        const response = await fetch(url)
        const issCoordinates = await response.json()
        setLoading(false)
        setData(issCoordinates)
    }

    useEffect(() => {
        fetchCoordinates()
    }, [url])

    return  {data: data, loading: loading}

}

export default useFetch
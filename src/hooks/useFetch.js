import { useState, useEffect } from "react"


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url);
                const data = await res.json();
                if (res.status === 404) {
                    throw new Error(res.statusText)
                }
                setLoading(false)
                setData(data)
            }
            catch (err) {
                setLoading(false)
                setError(err.message)
            }
        }
        fetchData()
    }, [url])

    return {
        data: data, isLoading, error
    }
}

export default useFetch
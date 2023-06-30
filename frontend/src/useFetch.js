import axios from "axios";
import { useEffect, useState } from "react"

const api = axios.create({
    baseURL: `http://localhost:5000/`
})

export function useFetch(url) {
    const [data, setData] = useState()

    const [error, setError] = useState()

    useEffect(() => {
        api.get(url)
          .then(response => {
            setData(response.data)
          })
          .catch( err => {
            setError(err)
          })
          .finally(() => {
            console.log('OK');
          })
    }, [])

    return { data, error }
}
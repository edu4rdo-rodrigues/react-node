import axios from "axios";
import { useEffect, useState } from "react"

const api = axios.create({
    baseURL: `http://82.180.137.228:5000/`
})

export function useFetch(url) {
    const [data, setData] = useState()

    const [err, setErr] = useState()

    useEffect(() => {
        api.get(url)
          .then(response => {
            setData(response.data)
            console.log('then', response);
          })
          .catch( err => {
            setErr(err)
            console.log('catch err: ', err);
          })
          .finally(() => {
            console.log('finally OK');
          })
    }, [])

    return { data, err }
}
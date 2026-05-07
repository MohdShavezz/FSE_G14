import { useEffect, useState } from "react"

type DATA_TYPE = {
    id: number,
    name: string,
    email: string
}
const useUserdata = (url: string) => {

    const [data, setData] = useState<DATA_TYPE[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        try {
            async function getUsers() {
                setLoading(true)
                const res = await fetch(url)
                const users: DATA_TYPE[] = await res.json()
                setData(users)
                setLoading(false)
            }
            getUsers()
        } catch (error: any) {
            setLoading(false)
            console.log('error:', error)
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }, [])
    // console.log(data,loading,error)
    return {data, loading, error}
}

export default useUserdata
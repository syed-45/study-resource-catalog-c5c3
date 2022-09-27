import axios from "axios"

export async function getTags(): Promise<string[]> {
    const res = await axios.get('https://study-resource-catalog-c5c3.herokuapp.com/tablename/tags')
    return res.data
}
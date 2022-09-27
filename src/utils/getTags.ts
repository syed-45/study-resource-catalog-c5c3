import axios from "axios"
import { Itag, IWeek } from "../components/SubmitResource"

export async function getTags(): Promise<Itag[]> {
    const res = await axios.get('https://study-resource-catalog-c5c3.herokuapp.com/tablename/tags')
    return res.data
}

export async function getWeeks(): Promise<IWeek[]> {
    const res = await axios.get('https://study-resource-catalog-c5c3.herokuapp.com/tablename/buildweeks')
    return res.data
}

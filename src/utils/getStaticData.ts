import axios from "axios"
import { IContentType, IRecommendationOption, Itag, IWeek,  } from "../components/SubmitResource"

export async function getTags(): Promise<Itag[]> {
    const res = await axios.get('https://study-resource-catalog-c5c3.herokuapp.com/tablename/tags')
    return res.data
}

export async function getWeeks(): Promise<IWeek[]> {
    const res = await axios.get('https://study-resource-catalog-c5c3.herokuapp.com/tablename/buildweeks')
    return res.data
}

export async function getRecommendationOptions(): Promise<IRecommendationOption[]> {
    const res = await axios.get('https://study-resource-catalog-c5c3.herokuapp.com/tablename/recommendations')
    return res.data
}

export async function getContentTypes(): Promise<IContentType[]> {
    const res = await axios.get('https://study-resource-catalog-c5c3.herokuapp.com/tablename/contenttypes')
    return res.data
}
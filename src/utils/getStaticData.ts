import axios from "axios";
import {
  IContentType,
  IRecommendationOption,
  Itag,
  IWeek,
} from "../components/SubmitResource";
import { BASEURL } from "./interfaces";

export async function getTags(): Promise<Itag[]> {
  const res = await axios.get(`${BASEURL}/tablename/tags`);
  return res.data;
}

export async function getWeeks(): Promise<IWeek[]> {
  const res = await axios.get(`${BASEURL}/tablename/buildweeks`);
  return res.data;
}

export async function getRecommendationOptions(): Promise<
  IRecommendationOption[]
> {
  const res = await axios.get(`${BASEURL}/tablename/recommendations`);
  return res.data;
}

export async function getContentTypes(): Promise<IContentType[]> {
  const res = await axios.get(`${BASEURL}/tablename/contenttypes`);
  return res.data;
}

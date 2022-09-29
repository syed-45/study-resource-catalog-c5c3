import axios from "axios";
import { IResource } from "./interfaces";

interface IDBResources {
  resource_id: number;
  submitter: number;
  title: string;
  author: string;
  url: string;
  time_stamp: string;
  summary: string;
  recommendation_option: string;
  recommendation_text: string;
}
export async function getResources(): Promise<IResource[]> {
  try {
    const response = await axios.get(
      "https://study-resource-catalog-c5c3.herokuapp.com/resources"
    );
    const resources: IResource[] = response.data.map((row: IDBResources) => ({
      resourceID: row.resource_id,
      submitter: row.submitter,
      title: row.title,
      author: row.author,
      URL: row.url,
      timestamp: row.time_stamp,
      summary: row.summary,
      reccomendationText: row.recommendation_text,
      reccomendationOptions: row.recommendation_option,
    }));
    return resources;
  } catch (error) {
    console.log(error);
  }
  return [];
}

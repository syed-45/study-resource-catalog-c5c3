import axios from "axios";
import { BASEURL, ResourceID } from "./interfaces";

export interface IPreferences {
  likes: number;
  dislikes: number;
}

export async function getPreferences(
  resourceID: ResourceID
): Promise<IPreferences> {
  const url = `${BASEURL}/resources/preference/${resourceID}`;
  const response = await axios.get(url);
  const preferences = {
    likes: response.data.likes,
    dislikes: response.data.dislikes,
  };
  return preferences;
}

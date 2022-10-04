import axios from "axios";
import { BASEURL, ITagResource } from "./interfaces";

export async function getTagsWithResources(): Promise<ITagResource[]> {
  //get request to API for all tags for every resourceID
  const allTagsWithResources = await axios.get(`${BASEURL}/tags/tagresource`);
  return allTagsWithResources.data;
}

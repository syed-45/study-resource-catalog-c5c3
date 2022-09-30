import axios from "axios";
import { BASEURL, ResourceID, userID } from "./interfaces";

export async function submitComment(
  resourceID: ResourceID,
  userID: userID,
  commentMessage: string
): Promise<void> {
  const requestBody = {
    user_id: userID,
    message: commentMessage,
  };
  await axios.post(`${BASEURL}/resources/comments/${resourceID}`, requestBody);
}

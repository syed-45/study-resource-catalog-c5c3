import axios from "axios";
import { BASEURL, IComment, ResourceID } from "./interfaces";

// TODO missing resourceID against a commment
/**
 * get comments given a resource order by timestamp DESC
 * @params resource: IResource
 *
 * @returns
 */
interface IDBComments {
  user_id: number;
  message: string;
  time_stamp: string;
  resource_id: number;
}
export async function getComments(resourceid: ResourceID): Promise<IComment[]> {
  /*
comment_id SERIAL PRIMARY KEY,
    user_id integer references users(user_id),
    message text,
    time_stamp timestamp default NOW(),
    resource_id integer references resources(resource_id)*/

  try {
    const response = await axios.get(
      `${BASEURL}/resources/comments/${resourceid}`
    );
    const comments: IComment[] = response.data.map((row: IDBComments) => ({
      userID: row.user_id,
      message: row.message,
      timestamp: row.time_stamp,
      resourceID: row.resource_id,
    }));
    return comments;
  } catch (error) {
    console.log(error);
  }
  return [];
}

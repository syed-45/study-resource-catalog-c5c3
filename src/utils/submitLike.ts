import { IPreferences } from "./getLikes";
import { Preference, ResourceID } from "./interfaces";

// TODO missing resourceID against a commment
/**
 * get comments given a resource order by timestamp DESC
 * @params resource: IResource
 *
 * @returns
 */

export function submitLike(
  resourceID: ResourceID,
  preference: Preference
): IPreferences {
  const likes = {
    likes: 109,
    dislikes: 40,
  };
  return likes;
}

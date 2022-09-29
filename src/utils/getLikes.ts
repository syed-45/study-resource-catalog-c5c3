import { ResourceID } from "./interfaces";

// TODO missing resourceID against a commment
/**
 * get comments given a resource order by timestamp DESC
 * @params resource: IResource
 *
 * @returns
 */
export interface IPreferences {
  likes: number;
  dislikes: number;
}

export function getLikes(resourceID: ResourceID): IPreferences {
  const likes = {
    likes: 109,
    dislikes: 40,
  };
  return likes;
}

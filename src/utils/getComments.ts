import { IComment } from "./interfaces";

// TODO missing resourceID against a commment
/**
 * get comments given a resource order by timestamp DESC
 * @params resource: IResource
 *
 * @returns
 */
export function getComments(): IComment[] {
  const mockComments: IComment[] = [
    {
      commentID: 1,
      userID: 2,
      message: "This is a great comment",
      timestamp: "2022-09-06 10:52:50.456749",
    },
    {
      commentID: 1,
      userID: 2,
      message: "This is a second greatest comment",
      timestamp: "2022-09-06 10:53:50.456749",
    },
  ];

  return mockComments;
}

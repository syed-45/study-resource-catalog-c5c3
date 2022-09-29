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
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: "2022-09-06 10:52:50.456749",
    },
    {
      commentID: 1,
      userID: 2,
      message: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with",
      timestamp: "2022-09-06 10:53:50.456749",
    },

  ];

  return mockComments;
}

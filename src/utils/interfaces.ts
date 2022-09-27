export interface IAppState {
  loggedInUser: IUser | null;
  userList: IUser[];
  studyResources: IResource[];
  allResources: IResource[];
  searchAllResources: ISearchQuery;
  searchStudyResources: ISearchQuery;
}

export type userID = number;
export interface IUser {
  userID: userID;
  username: string;
  isFaculty: boolean;
}

export interface IResource {
  resourceID: number;
  submitter: userID;
  title: string;
  author: string;
  URL: string;
  timestamp: string;
  summary: string;
  reccomendationText: string;
  reccomendationOptions: string;
}

/*
  CREATE TABLE comment_inputs (
    comment_id SERIAL PRIMARY KEY,
    user_id integer references users(user_id),
    message text,
    time_stamp timestamp default NOW()
   );

*/
export interface IComment {
  commentID: number;
  userID: userID;
  message: string;
  timestamp: string;
}

export interface ISearchQuery {
  searchTerm: string;
  tag: string[];
}

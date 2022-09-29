import { IResource } from "./interfaces";

// CREATE TABLE resources (
//   resource_id SERIAL PRIMARY KEY,
//   submitter integer REFERENCES users(user_id),
//   title text,
//   author text,
//   url text,
//   time_stamp timestamp default NOW(),
//   summary text,
//   recommendation_option text references recommendations(recommendation_option),
//   recommendation_text text
//   );

export function getResources(): IResource[] {
  const mockResources: IResource[] = [
    {
      resourceID: 1,
      submitter: 1,
      title: "CSS",
      author: "Neill",
      URL: "udemy.com",
      timestamp: "2022-09-06 10:52:50.456749",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      reccomendationText: "This is a reccomendation Text",
      reccomendationOptions: "I recommend !",
    },
    {
      resourceID: 2,
      submitter: 2,
      title: "HTML 5",
      author: "Sevgi",
      URL: "udemy.com",
      timestamp: "2022-09-06 10:52:50.456749",
      summary: "This is a summary",
      reccomendationText: "This is a reccomendation Text",
      reccomendationOptions: "I recommend !",
    },
  ];

  return mockResources;
}

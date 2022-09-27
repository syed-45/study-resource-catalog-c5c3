import { useEffect, useState } from "react";
import { IAppState, IResource } from "../utils/interfaces";

interface SubmitResourceProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}


export function SubmitResource({
  appState,
  setAppState,
}: SubmitResourceProps): JSX.Element {
  const [inputs, setInputs] = useState<IResource>({
    resourceID: 1234,
    submitter: appState.loggedInUser?.userID || 1234,
    title: "",
    author: "",
    URL: "",
    timestamp: "",
    summary: "",
    reccomendationText: "",
    reccomendationOptions: "",
  });
  const [tags, setTags] = useState<string[]>()

  // useEffect( () => async () => await setTags(getTags()))

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const listOfUsers: IUser[] = await getUserList();
  //     console.log(listOfUsers);
  //     setAppState((appState) => ({ ...appState, userList: listOfUsers }));
  //   };
  //   getUsers();
  // }, [setAppState]);

  return (
    <div className="submit-resource-form">
      <input
        placeholder="Resource title"
        value={inputs?.title}
        onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
      ></input>
      <input
        placeholder="Author Name"
        value={inputs?.author}
        onChange={(e) => setInputs({ ...inputs, author: e.target.value })}
      ></input>
      <input
        placeholder="Link"
        value={inputs?.URL}
        onChange={(e) => setInputs({ ...inputs, URL: e.target.value })}
      ></input>
      <div>
        dropdwon tags...        
      </div>
      <select>
        <option>content type</option>
      </select>
      <select>
        <option>build week</option>
      </select>
      <select>
        <option>recommendation status</option>
      </select>
      <input
        placeholder="Why you would recommend this..."
        value={inputs?.reccomendationText}
        onChange={(e) =>
          setInputs({ ...inputs, reccomendationText: e.target.value })
        }
      ></input>
      <textarea
        placeholder="summary of resource"
        value={inputs?.summary}
        onChange={(e) =>
          setInputs({ ...inputs, summary: e.target.value })
        }
      ></textarea>
    </div>
  );

  {
    /* // -> user fills in form {}
  // -> user press submit
  // -> axios.post({appState.loggedInUser?.userID, other form stuff}) */
  }
}

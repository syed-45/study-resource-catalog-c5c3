import axios from "axios";
import { useEffect, useState } from "react";
import { getTags, getWeeks } from "../utils/getTags";
import { IAppState, IResource} from "../utils/interfaces";

interface SubmitResourceProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export interface Itag {
  tag_name: string
}
export interface IWeek {
  build_week_name: string
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

  const [tags, setTags] = useState<Itag[]>([]);
  const [weeks, setWeeks] = useState<IWeek[]>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [bgColor, setbgColor] = useState<string>('rgb(242 243 235)')

  useEffect(() => {
    const getAllTags = async () => {
      const allTags: Itag[] = await getTags();
      console.log(allTags);
      setTags(allTags);
    };

    const getAllWeeks = async () => {
      const allWeeks: IWeek[] = await getWeeks();
      console.log(allWeeks);
      setWeeks(allWeeks);
    };
    getAllTags();
    getAllWeeks();
  }, []);

  const handleTagClick = async (tagName: string) => {
    // const res = await axios.post('https://study-resource-catalog-c5c3.herokuapp.com/tags',{
    //   tag: tagName
    // })
    const matchingIndex = selectedTags.indexOf(tagName)
    if (matchingIndex===-1) {
      setSelectedTags([...selectedTags,tagName])
    }
    else {       
      const currentlySelectedTags = [...selectedTags]
      currentlySelectedTags.splice(matchingIndex,1);
      setSelectedTags(currentlySelectedTags)
    }
  }
  

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
      {/* <select>
        <option> dropdwon tags..</option> */}
        {/* {tags?.map((tag, index) => {
          return (
            <option key={index} value={tag.tag_name}>
              {" "}
              {tag.tag_name}
            </option>
          );
        })} */}            
        {/* <option>content type</option> */}
        <div className="tags-cloud">
          {          
          tags.map((tag:Itag, index):JSX.Element=>{
            return(              
              <button style={{backgroundColor:selectedTags.includes(tag.tag_name) ?  'lightgreen' : 'rgb(242 243 235)'}}onClick={()=>handleTagClick(tag.tag_name)}key={index}>{tag.tag_name}</button>
            )
          })}
          </div>
      <select>
        <option>build week</option>
        {weeks?.map((week, index) => {
          return <option key={index}> {week.build_week_name} </option>;
        })}
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
        onChange={(e) => setInputs({ ...inputs, summary: e.target.value })}
      ></textarea>
    </div>
  );

  // {
  //   /* // -> user fills in form {}
  // // -> user press submit
  // // -> axios.post({appState.loggedInUser?.userID, other form stuff}) */
  // }
}

import axios from "axios";
import { useEffect, useState } from "react";
import {
  getContentTypes,
  getRecommendationOptions,
  getTags,
  getWeeks,
} from "../utils/getStaticData";
import { IAppState, IResource } from "../utils/interfaces";
import { useNavigate } from "react-router-dom";

interface SubmitResourceProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export interface Itag {
  tag_name: string;
}
export interface IWeek {
  build_week_name: string;
}
export interface IRecommendationOption {
  recommendation_option: string;
}
export interface IContentType {
  content_type: string;
}

export function SubmitResource({
  appState,
  setAppState,
}: SubmitResourceProps): JSX.Element {
  const [inputs, setInputs] = useState<IResource>({
    resourceID: 0,
    submitter: appState.loggedInUser?.userID || 0,
    title: "",
    author: "",
    URL: "",
    timestamp: "",
    summary: "",
    reccomendationText: "",
    reccomendationOptions: "",
  });

  const [tags, setTags] = useState<Itag[]>([]);
  const [weeks, setWeeks] = useState<IWeek[]>([]);
  const [recommendations, setRecommendations] = useState<
    IRecommendationOption[]
  >([]);
  const [contentTypes, setContentTypes] = useState<IContentType[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  /*
  useNavigate prevents accessing Submit resource Page, when user is not logged in
  */

  const navigate = useNavigate();
  useEffect(() => {
    if (appState.loggedInUser === null) {
      navigate("/");
    }
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

    const getAllRecommendationOptions = async () => {
      const listOfrecommendations: IRecommendationOption[] =
        await getRecommendationOptions();
      setRecommendations(listOfrecommendations);
    };
    const getAllContentTypes = async () => {
      const listOfContentTypes: IContentType[] = await getContentTypes();
      setContentTypes(listOfContentTypes);
    };

    getAllTags();
    getAllWeeks();
    getAllRecommendationOptions();
    getAllContentTypes();
  }, [appState.loggedInUser, navigate]);

  const handleTagClick = async (tagName: string) => {
    // const res = await axios.post('https://study-resource-catalog-c5c3.herokuapp.com/tags',{
    //   tag_name: tagName
    // })
    const matchingIndex = selectedTags.indexOf(tagName);
    if (matchingIndex === -1) {
      setSelectedTags([...selectedTags, tagName]);
    } else {
      const currentlySelectedTags = [...selectedTags];
      currentlySelectedTags.splice(matchingIndex, 1);
      setSelectedTags(currentlySelectedTags);
    }
  };

  const handleReccomendation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputs({ ...inputs, reccomendationOptions: e.target.value });
  };

  async function handleSubmitResource(e: React.FormEvent) {
    // e.preventDefault();
    const data: IResource = {
      resourceID: 0,
      submitter: inputs.submitter,
      title: inputs.title,
      author: inputs.author,
      URL: inputs.URL,
      timestamp: inputs.timestamp,
      summary: inputs.summary,
      reccomendationText: inputs.reccomendationText,
      reccomendationOptions: inputs.reccomendationOptions,
    };

    const resourceData = await axios.post(
      "http://localhost:4000/resources", //change to heroku
      data
    );
    console.log(resourceData); //to delete
  }

  return (
    <div>
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
        <select>
          <option disabled selected hidden>
            content type
          </option>
          {contentTypes.map((contentType, index) => {
            return <option key={index}> {contentType.content_type}</option>;
          })}
        </select>
        <div className="tags-cloud">
          {tags.map((tag: Itag, index): JSX.Element => {
            return (
              <button
                style={{
                  backgroundColor: selectedTags.includes(tag.tag_name)
                    ? "lightgreen"
                    : "rgb(242 243 235)",
                }}
                onClick={() => handleTagClick(tag.tag_name)}
                key={index}
              >
                {tag.tag_name}
              </button>
            );
          })}
        </div>
        <select>
          <option disabled selected hidden>
            build week
          </option>
          {weeks?.map((week, index) => {
            return <option key={index}> {week.build_week_name} </option>;
          })}
        </select>
        <select onChange={handleReccomendation}>
          <option disabled selected hidden>
            recommendation status
          </option>
          {recommendations.map((recommendation, index) => {
            return (
              <option key={index}>
                {" "}
                {recommendation.recommendation_option}{" "}
              </option>
            );
          })}
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
        <button type="submit" onClick={handleSubmitResource}>
          Submit
        </button>
      </div>
    </div>
  );
}

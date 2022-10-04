import axios from "axios";
import { Container } from "react-bootstrap";
import "../SubmitResource.css";
import { useEffect, useState } from "react";
import {
  getContentTypes,
  getRecommendationOptions,
  getTags,
  getWeeks,
} from "../utils/getStaticData";
import { IAppState, IResource } from "../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { initialInputs } from "../utils/initialiseInputs";

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
    ...initialInputs,
    submitter: appState.loggedInUser?.userID || 0,
  });

  const [tags, setTags] = useState<Itag[]>([]);
  const [weeks, setWeeks] = useState<IWeek[]>([]);
  const [contentTypes, setContentTypes] = useState<IContentType[]>([]);
  const [recommendations, setRecommendations] = useState<
    IRecommendationOption[]
  >([]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedWeek, setSelectedWeek] = useState<IWeek>({
    build_week_name: "",
  });
  const [selectedContentType, setSelectedContentType] = useState<IContentType>({
    content_type: "",
  });

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
      setTags(allTags);
    };

    const getAllWeeks = async () => {
      const allWeeks: IWeek[] = await getWeeks();
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
    const matchingIndex = selectedTags.indexOf(tagName);
    if (matchingIndex === -1) {
      setSelectedTags([...selectedTags, tagName]);
    } else {
      const currentlySelectedTags = [...selectedTags];
      currentlySelectedTags.splice(matchingIndex, 1);
      setSelectedTags(currentlySelectedTags);
    }
  };

  async function handleSubmitResource() {
    if (inputs.title.length === 0) {
      toast.warning("Please insert the title");
      return;
    }

    if (inputs.URL.length === 0) {
      toast.warning("Please insert the link");
      return;
    }

    if (!/^(?:[a-z]+:)?\/\//i.test(inputs.URL)) {
      toast.warning("Please insert a valid link");
      return;
    }

    if (selectedContentType.content_type.length === 0) {
      toast.warning("You need to select a content type");
      return;
    }
    if (selectedTags.length === 0) {
      toast.warning("You need to select at least one tag");
      return;
    }
    if (selectedWeek.build_week_name.length === 0) {
      toast.warning("You need to select a study week");
      return;
    }
    if (inputs.reccomendationOptions.length === 0) {
      toast.warning("You need to select a recommendation field");
      return;
    }
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

    const response = await axios.post(
      "https://study-resource-catalog-c5c3.herokuapp.com/resources", //change to heroku
      data
    );

    const resourceData: IResource = response.data;

    const contentTypeResponse = await axios.post(
      "https://study-resource-catalog-c5c3.herokuapp.com/tablename/content_types_resource",
      {
        content_type: selectedContentType.content_type,
        resource_id: resourceData.resourceID,
      }
    );

    if (contentTypeResponse.status !== 200) {
      toast.warn("Failed to submit content type");
    }

    const tagDataResponse = await axios.post(
      "https://study-resource-catalog-c5c3.herokuapp.com/tablename/tag_resource",
      {
        tag_name: selectedTags,
        resource_id: resourceData.resourceID,
      }
    );
    if (tagDataResponse.status !== 200) {
      toast.warn("Failed to submit tags");
    }

    const weekData = await axios.post(
      "https://study-resource-catalog-c5c3.herokuapp.com/tablename/buildweek_resource",
      {
        build_week_name: selectedWeek.build_week_name,
        resource_id: resourceData.resourceID,
      }
    );

    if (weekData.status === 200) {
      toast.success("Rescource submitted successfully!");
    }
    navigate("/");
  }

  return (
    <Container>
      <div className="submit-resource-form text-center">
        <input
          className="form-control"
          placeholder="Resource title"
          value={inputs?.title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        ></input>
        <input
          className="form-control"
          placeholder="Author Name"
          value={inputs?.author}
          onChange={(e) => setInputs({ ...inputs, author: e.target.value })}
        ></input>
        <input
          className="form-control"
          placeholder="Link"
          value={inputs?.URL}
          onChange={(e) => setInputs({ ...inputs, URL: e.target.value })}
        ></input>
        <select
          className="form-control"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedContentType({
              content_type: e.target.value,
            })
          }
        >
          <option hidden>content type</option>
          {contentTypes.map((contentType, index) => {
            return <option key={index}> {contentType.content_type}</option>;
          })}
        </select>
        <div className="tags-cloud text-center">
          {tags.map((tag: Itag, index): JSX.Element => {
            return (
              <button
                className="buttonTag"
                style={{
                  backgroundColor: selectedTags.includes(tag.tag_name)
                    ? "rgb(0, 145, 0)"
                    : "white",
                }}
                onClick={() => handleTagClick(tag.tag_name)}
                key={index}
              >
                {tag.tag_name}
              </button>
            );
          })}
        </div>
        <select
          className="form-control"
          onChange={(e) => setSelectedWeek({ build_week_name: e.target.value })}
        >
          <option hidden>build week</option>
          {weeks?.map((week, index) => {
            return <option key={index}> {week.build_week_name} </option>;
          })}
        </select>
        <select
          className="form-control"
          onChange={(e) =>
            setInputs({ ...inputs, reccomendationOptions: e.target.value })
          }
        >
          <option hidden>recommendation status</option>
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
          className="form-control"
          placeholder="Why you would recommend this..."
          value={inputs?.reccomendationText}
          onChange={(e) =>
            setInputs({ ...inputs, reccomendationText: e.target.value })
          }
        ></input>
        <textarea
          className="form-control"
          placeholder="summary of resource"
          value={inputs?.summary}
          onChange={(e) => setInputs({ ...inputs, summary: e.target.value })}
        ></textarea>
        <button
          className="btn btn-success"
          type="submit"
          onClick={handleSubmitResource}
        >
          Submit
        </button>
      </div>
    </Container>
  );
}

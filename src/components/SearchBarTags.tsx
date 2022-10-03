import { useEffect, useState } from "react";
import { getTags } from "../utils/getStaticData";
import { Itag } from "./SubmitResource";
import { IAppState } from "../utils/interfaces";
interface SearchBarForTagsProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}
export default function SearchBarForTags({
  appState,
  setAppState,
}: SearchBarForTagsProps): JSX.Element {
  const [allTags, setAllTags] = useState<Itag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Itag[]>([]);
  useEffect(() => {
    const getAllTags = async () => {
      const allReceivedTags: Itag[] = await getTags();
      setAllTags(allReceivedTags);
    };
    getAllTags();
  }, []);
  function handleSelectTag(tag: Itag) {
    const matchingIndex = selectedTags.indexOf(tag);
    if (matchingIndex === -1) {
      setSelectedTags([...selectedTags, tag]);
      setAppState({
        ...appState,
        searchAllResources: {
          searchTerm: "",
          tag: [...selectedTags, tag],
        },
      });
    } else {
      const currentlySelectedTags = [...selectedTags];
      currentlySelectedTags.splice(matchingIndex, 1);
      setSelectedTags(currentlySelectedTags);
      setAppState({
        ...appState,
        searchAllResources: {
          searchTerm: "",
          tag: [...currentlySelectedTags],
        },
      });
    }
  }
  return (
    <div className="tags-cloud text-center">
      {allTags.map((tag, index) => {
        return (
          <button
            className="buttonTag"
            style={{
              backgroundColor: selectedTags.includes(tag)
                ? "rgb(0, 145, 0)"
                : "white",
            }}
            onClick={() => handleSelectTag(tag)}
            key={index}
          >
            {tag.tag_name}
          </button>
        );
      })}
    </div>
  );
}

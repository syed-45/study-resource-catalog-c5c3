import { useState } from "react";
import { IAppState } from "../utils/interfaces";
interface SearchBarProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}
export default function SearchBar({
  appState,
  setAppState,
}: SearchBarProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="text-center" style={{ marginTop: "15px" }}>
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setAppState({
            ...appState,
            searchAllResources: {
              searchTerm: searchTerm,
              tag: [...appState.searchAllResources.tag],
            },
          });
        }}
      >
        Search
      </button>
    </div>
  );
}

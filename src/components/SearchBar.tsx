import { useState } from "react";
import { Button } from "react-bootstrap";
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
    <div
      className="form-group"
      style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
    >
      <input
        className="form-control text-center"
        style={{ width: "400px" }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Button
        variant="light"
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
      </Button>
    </div>
  );
}

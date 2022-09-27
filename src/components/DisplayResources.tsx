import { resourceUsage } from "process";
import { Accordion, Button, Card } from "react-bootstrap";
import { getResources } from "../utils/getResources";
import { IAppState } from "../utils/interfaces";
import { ResourceCard } from "./ResourceCard";

interface DisplayResourcesProps {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function DisplayResources({
  appState,
  setAppState,
}: DisplayResourcesProps): JSX.Element {
  return (
    <section className="display-resources">
      {getResources().map((resource) => (
        <ResourceCard
          key={resource.resourceID}
          resource={resource}
          appState={appState}
        />
      ))}
    </section>
  );
}

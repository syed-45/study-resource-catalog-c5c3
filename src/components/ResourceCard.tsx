import { Button, Card } from "react-bootstrap";
import { IAppState, IResource } from "../utils/interfaces";
import { CommentSection } from "./CommentSection";

interface ResourceCardProps {
  appState: IAppState;
  resource: IResource;
}

export function ResourceCard({
  resource,
  appState,
}: ResourceCardProps): JSX.Element {
  return (
    <Card
      key={resource.resourceID}
      style={{ minWidth: "18rem" }}
      border="success"
    >
      <Card.Header>
        {resource.title}
        <Card.Subtitle className="mb-2 text-muted">
          by {resource.author}
        </Card.Subtitle>
        <Button variant="outline-success">👍🏽</Button>
        <Button variant="outline-danger">👎🏽</Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>{resource.summary}</Card.Text>
        <Button variant="light">show more</Button>
      </Card.Body>
      <CommentSection resource={resource} appState={appState} />
    </Card>
  );
}

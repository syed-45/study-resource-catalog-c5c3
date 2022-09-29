import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/esm/Accordion";
import { formatTimestamp } from "../utils/formatTimestamp";
import { getComments } from "../utils/getComments";
import { IAppState, IResource } from "../utils/interfaces";
import { AddComment } from "./AddComment";
import "./commentSection.css";

interface CommentSectionProps {
  appState: IAppState;
  resource: IResource;
}

export function CommentSection({
  resource,
  appState,
}: CommentSectionProps): JSX.Element {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>view comments</Accordion.Header>
        <Accordion.Body>
          <AddComment resource={resource} appState={appState} />
          {getComments().map((comment) => (
            <Card key={comment.commentID} className="comment-card">
              <Card.Body>
                <Card.Text>{comment.message}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted small">
                {formatTimestamp(comment.timestamp)}
              </Card.Footer>
            </Card>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

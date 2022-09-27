import { Button, Card } from "react-bootstrap";
import { IAppState, IResource } from "../utils/interfaces";

interface CommentSectionProps {
  appState: IAppState;
  resource: IResource;
}

export function AddComment({
  resource,
  appState,
}: CommentSectionProps): JSX.Element {
  return (
    <>
      {appState.loggedInUser && (
        <Card>
          <Card.Body>
            <input
              className="add-comment-input"
              placeholder="Add a comment"
            ></input>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button variant="success">Add Comment</Button>
          </Card.Footer>
        </Card>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/esm/Accordion";
import { formatTimestamp } from "../utils/formatTimestamp";
import { getComments } from "../utils/getComments";
import { IAppState, IComment, IResource } from "../utils/interfaces";
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
  const [comments, setComments] = useState<IComment[]>([]);
  useEffect(() => {
    getComments(resource.resourceID).then((comments) => setComments(comments));
  }, [setComments, resource.resourceID]);
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>view comments</Accordion.Header>
          <Accordion.Body>
            <AddComment
              resource={resource}
              appState={appState}
              setComments={setComments}
              disabled={appState.loggedInUser === null}
            />
            {comments.map((comment) => (
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
    </>
  );
}

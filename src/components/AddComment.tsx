import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { getComments } from "../utils/getComments";
import { IAppState, IComment, IResource } from "../utils/interfaces";
import { submitComment } from "../utils/submitComment";

interface CommentSectionProps {
  appState: IAppState;
  resource: IResource;
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
  disabled: boolean;
}

export function AddComment({
  resource,
  appState,
  setComments,
  disabled,
}: CommentSectionProps): JSX.Element {
  const [commentMessage, setCommentMessage] = useState("");

  useEffect(() => {
    setCommentMessage("");
  }, [appState.loggedInUser]);

  const handleSubmitComment = () => {
    if (appState.loggedInUser) {
      submitComment(
        resource.resourceID,
        appState.loggedInUser.userID,
        commentMessage
      ).then(() => {
        setCommentMessage("");
        getComments(resource.resourceID).then((comments) =>
          setComments(comments)
        );
      });
    } else {
      throw Error("ERROR: loggin missing at comment submission");
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <input
            className={`add-comment-input ${disabled ? "hideCaret" : ""}`}
            placeholder={disabled ? "Log in to comment away" : "Add a comment"}
            value={commentMessage}
            onChange={(e) =>
              disabled === false && setCommentMessage(e.target.value)
            }
          ></input>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button
            disabled={disabled}
            variant="success"
            onClick={handleSubmitComment}
          >
            Add Comment
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { getLikes, IPreferences } from "../utils/getLikes";
import { IAppState, IResource, Preference } from "../utils/interfaces";
import { CommentSection } from "./CommentSection";
import { formatTimestamp } from "../utils/formatTimestamp";

interface ResourceCardProps {
  appState: IAppState;
  resource: IResource;
}

export function ResourceCard({
  resource,
  appState,
}: ResourceCardProps): JSX.Element {
  const [showLess, setShowLess] = useState(true);
  const [preferences, setPreferences] = useState<IPreferences>({
    likes: 0,
    dislikes: 0,
  });

  useEffect(() => {
    setPreferences(getLikes(resource.resourceID));
  }, [resource.resourceID]);

  const handlePreference = (preference: Preference) => {
    /*
    update the like buttons for immediate feedback
    make post request for preference
    get likes again to get source of truth
    */

    if (preference === "like") {
      setPreferences({ ...preferences, likes: preferences.likes + 1 });
    } else {
      setPreferences({ ...preferences, dislikes: preferences.dislikes + 1 });
    }

    // API requests
    // submitLike(resource.resourceID, preference);
    // setPreferences(getLikes(resource.resourceID));
  };

  return (
    <Card
      key={resource.resourceID}
      style={{ minWidth: "18rem" }}
      border="success"
    >
      <Card.Header className="resource-card-header">
        <div className="card-title">
          {resource.title}
          <Card.Subtitle className="mb-2 text-muted">
            by {resource.author}
            <br />
            {formatTimestamp(resource.timestamp)}
          </Card.Subtitle>
        </div>
        <div className="like-buttons">
          <Button
            variant="outline-success"
            onClick={() => handlePreference("like")}
            disabled={appState.loggedInUser === null}
          >
            👍🏽 {preferences.likes}
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => handlePreference("dislike")}
            disabled={appState.loggedInUser === null}
          >
            👎 {preferences.dislikes}
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text className={showLess ? "show-less" : ""}>
          {resource.summary}
        </Card.Text>
        <Button variant="light" onClick={() => setShowLess(!showLess)}>
          {`show ${showLess ? "more" : "less"}`}
        </Button>
      </Card.Body>
      <CommentSection resource={resource} appState={appState} />
    </Card>
  );
}

import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { getPreferences, IPreferences } from "../utils/getPreferences";
import { IAppState, IResource, Preference } from "../utils/interfaces";
import { CommentSection } from "./CommentSection";
import { formatTimestamp } from "../utils/formatTimestamp";
import { submitPreferences } from "../utils/submitLike";

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
    getPreferences(resource.resourceID).then((prefs) => setPreferences(prefs));
  }, [resource.resourceID]);

  const handlePreference = (preference: Preference) => {
    /*
    update the like buttons for immediate feedback
    make post request for preference
    get likes again to get source of truth
    */

    // API requests
    if (appState.loggedInUser) {
      submitPreferences(
        resource.resourceID,
        appState.loggedInUser.userID,
        preference
      ).then(() => {
        getPreferences(resource.resourceID).then((prefs) => {
          console.log(prefs);
          setPreferences(prefs);
        });
      });
    }
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

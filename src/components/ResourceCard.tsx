import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { getPreferences, IPreferences } from "../utils/getPreferences";
import { IAppState, IResource, Preference } from "../utils/interfaces";
import { CommentSection } from "./CommentSection";
import { formatTimestamp } from "../utils/formatTimestamp";
import { submitPreferences } from "../utils/submitLike";
import { postFavourites } from "../utils/postFavourites";
import { deleteFavourites } from "../utils/deleteFavourites";
import { refreshFaves } from "../utils/refreshFaves";

interface ResourceCardProps {
  appState: IAppState;
  resource: IResource;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export function ResourceCard({
  resource,
  appState,
  setAppState,
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
  function handleFavourite() {
    appState.loggedInUser &&
      postFavourites(appState.loggedInUser.userID, resource.resourceID).then(
        () => refreshFaves({ appState, setAppState }) // eslint-disable-line react-hooks/exhaustive-deps
      );
  }
  function handleDeleteFaves() {
    appState.loggedInUser &&
      deleteFavourites(appState.loggedInUser.userID, resource.resourceID).then(
        () => refreshFaves({ appState, setAppState }) // eslint-disable-line react-hooks/exhaustive-deps
      );
  }

  function isFavourite(key: number) {
    return appState.faveResources.some(
      (resource) => resource.resourceID === key
    );
  }
  return (
    <Card
      key={resource.resourceID}
      style={{ minWidth: "18rem" }}
      border="success"
    >
      <Card.Header className="resource-card-header">
        <div className="card-title">
          <a href={`${resource.URL}`}>{resource.title}</a>
          <Card.Subtitle className="mb-2 text-muted">
            by {resource.author}
            <br />
            {formatTimestamp(resource.timestamp)}
          </Card.Subtitle>
        </div>
        <div className="like-buttons">
          {isFavourite(resource.resourceID) ? (
            <Button
              variant="outline-danger"
              onClick={handleDeleteFaves}
              disabled={appState.loggedInUser === null}
            >
              🗑️
            </Button>
          ) : (
            <Button
              variant="outline-success"
              onClick={handleFavourite}
              disabled={appState.loggedInUser === null}
            >
              📖
            </Button>
          )}
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
      <CommentSection
        key={`comment-${resource.resourceID}`}
        resource={resource}
        appState={appState}
      />
    </Card>
  );
}

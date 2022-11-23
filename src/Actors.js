import { useState, useEffect } from "react";

function Actors(props) {
  const [actors, setActors] = useState({ actors: [] });

  useEffect(() => {
    fetch("http://springapi-env-1.eba-9wfhpaeh.eu-west-1.elasticbeanstalk.com/movies/" + props.id)
      .then((data) => data.json())
      .then((data) => setActors(data));
  }, [props]);

  return Object.values(actors.actors).map(function (actor) {
    return actor.firstname + " " + actor.lastname + ",";
  });
}

export default Actors;

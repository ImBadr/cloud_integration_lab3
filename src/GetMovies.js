import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Trash2Fill } from "react-bootstrap-icons";
import Actors from "./Actors";

function GetMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://springapi-env-1.eba-9wfhpaeh.eu-west-1.elasticbeanstalk.com/movies")
      .then((data) => data.json())
      .then((data) => {setMovies(data)});
  }, []);
  
  const rows = Object.values(movies).map(function (movie) {
    return (
      <tr key={movie.id}>
        <td>{movie.id}</td>
        <td>{movie.name}</td>
        <td>{movie.author}</td>
        <td>
          <Actors id={movie.id} />
        </td>
        <td>
          {/* <Button variant="secondary"><PenFill /> edit</Button>{" "} */}
          <Button onClick={() => alert(fetch('http://springapi-env-1.eba-9wfhpaeh.eu-west-1.elasticbeanstalk.com/movies/' + movie.id, { method: 'DELETE' }))} variant="danger"><Trash2Fill /> delete</Button>{" "}
        </td>
      </tr>
    );
  });

  return (
      <div className="container my-5">
        <h1>Movies</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Movie name</th>
              <th>Producer</th>
              <th>Actors</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
  );
}

export default GetMovies;

import { axios } from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Api = () => {
  useEffect(() => {}, []);

  const [Api, setApi] = useState({});

  axios
    .get("https://api.themoviedb.org/3/movie/popular?", {
      params: {
        api_key: "93de3bd79f75665a1328de0e3d3fd7b4",
      },
    })

    .then((res) => setApi(res.data.results))
    .catch((err) => console.log(err));
  return (
    <>
      <div>
        {Api.map((Movies) => {
          return (
            <>
              <div className="movies" key={Movies.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${Movies.backdrop_path}`}
                />
                <h2>{Movies.original_title}</h2>
                <h3>{Movies.overview}</h3>
                <p>({Movies.Year})</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Api;

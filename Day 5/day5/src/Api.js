import { axiosInstance } from "./network/index";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFavourites } from "./store/Action";

const Api = () => {
  const [Api, setApi] = useState([]);
  // const fav = useSelector((state) => state.Favourites);
  // const dispatch = useDispatch();
  const fav = useSelector((state) => state.Favourites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFavourites());
  }, []);

  const changefav2 = () => {
    dispatch(
      setFavourites(
        fav ===
        (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        ) ? (
          <svg
            id="one"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        )
      )
    );
  };

  useEffect(() => {
    axiosInstance
      .get("movie/popular?api_key=93de3bd79f75665a1328de0e3d3fd7b4")
      .then((res) => setApi(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row p-5 m-3 col-12 bg-dark">
        {Api.map((Movies) => {
          const image = Movies.poster_path;
          return (
            <>
              <div className="container col-md-3 col-sm-6 p-3">
                <Link to={`/${Movies.id}`} className="film">
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + image}
                    style={{ width: "15rem" }}
                  ></img>

                  <h3 className="pt-5">{Movies.original_title}</h3>
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() => changefav2()}
                >
                  {fav}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Api;

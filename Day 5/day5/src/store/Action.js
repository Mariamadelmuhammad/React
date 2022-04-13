// export const setFavourites = (payload) => {
//   return {
//     type: "SET_FAVOURITES",
//     payload,
//   };
// };

import { axiosInstance } from "../network/index";

export const setFavourites = () => (dispatch) => {
  return axiosInstance
    .get("Movies")
    .then((res) =>
      dispatch({
        type: "SET_FAVOURITES",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case "GET_movies":
      return action.payload;
    default:
      return state;
  }
}

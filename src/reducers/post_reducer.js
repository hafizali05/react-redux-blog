export default function(state = {}, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      console.log("fetched post");
      return state;
    default:
      return state;
  }
}

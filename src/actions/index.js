import Axios from "axios";

export function fetch_posts() {
  const ROOT_URL = "reduxblog.herokuapp.com/api/posts?key=123";
  let request = Axios.get(ROOT_URL);
  return {
    type: "FETCH_POSTS",
    payload: request
  };
}

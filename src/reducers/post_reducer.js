import { FETCH_POSTS, FETCH_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
      const res = { ...state, [action.payload.data.id]: action.payload.data };
      return res;
    default:
      return state;
  }
}

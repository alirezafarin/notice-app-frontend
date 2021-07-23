import { GET_NOTICES } from "redux/types"

const initialState = {
  allNotices: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_NOTICES:
    return { ...state, allNotices: payload }

  default:
    return state
  }
}

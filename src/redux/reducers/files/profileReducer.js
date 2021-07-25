import { SET_PROFILE, GET_PROFILE } from "redux/types"

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_PROFILE:
    return { ...payload }

  case GET_PROFILE:
    return { ...payload.user }  

  default:
    return state
  }
}

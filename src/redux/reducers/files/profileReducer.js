import { SET_PROFILE } from "redux/types"

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_PROFILE:
    return { ...payload }

  default:
    return state
  }
}

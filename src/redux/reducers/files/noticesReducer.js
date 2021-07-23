import { GET_NOTICES, GET_NOTICE_DETIALS } from "redux/types"

const initialState = {
  allNotices: [],
  noticeDetails: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_NOTICES:
    return { ...state, allNotices: payload }

  case GET_NOTICE_DETIALS:
    return { ...state,
             noticeDetails: { ...state.noticeDetails, [payload._id]: payload } }
  
  default:
    return state
  }
}

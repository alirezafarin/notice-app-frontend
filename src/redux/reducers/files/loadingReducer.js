import { SET_LOADING } from 'redux/types';

const initialState = {
  getAll: false,
  getDetails: false,
  login: false,
  createNotice: false,
  getProfile: false,
  deleteNotice: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_LOADING:
    return { ...state, ...payload }

  default:
    return state
  }
}

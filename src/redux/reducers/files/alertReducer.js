import { SET_ALERT } from 'redux/types';

const initialState = {
  open: false,
  title: '',
  type: 'error'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_ALERT:
    return { ...state, ...payload }

  default:
    return state
  }
}

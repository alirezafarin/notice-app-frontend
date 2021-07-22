import { SET_MODAL } from 'redux/types';

const initialState = {
  openModal: false,
  title: '',
  content: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_MODAL:
    return { ...state, ...payload }

  default:
    return state
  }
}

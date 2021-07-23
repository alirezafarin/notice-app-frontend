import { apiCall } from 'Components/axiosSettings';
import { 
  SET_LOADING,
  SET_ALERT,
  SET_MODAL,
  GET_NOTICES,
} from 'redux/types';

////////////////////////////////////////////////////////////////
// loading handler
export const setLoading = (prop, bool, dispatch=null) => {

  if( dispatch ) {
    dispatch({
      type: SET_LOADING,
      payload: { [prop]: bool } 
    });

    return;
  }

  return {
    type: SET_LOADING,
    payload: { [prop]: bool } 
  };
}
////////////////////////////////////////////////////////////////
// alert handler
export const setAlert = (open = false, title = '', type='', dispatch=null) => {

  if( dispatch ) {
    dispatch({
      type: SET_ALERT,
      payload: { open, title, type } 
    });

    return;
  }

  return {
    type: SET_ALERT,
    payload: { open, title, type } 
  };
}

////////////////////////////////////////////////////////////////
// modal handler
export const setModal = (openModal=false, title='' ,content=null) => {

  return (dispatch, getState) => {
    let storeModal = getState().modal;
    let storeTitle = storeModal.title;
    let storeContent = storeModal.content;

    // to avoid sudden modal content pop for when close modal action is called
    if(title === '') {
      title = storeTitle;
    }
    if(!content) {
      content = storeContent;
    }

    dispatch({
      type: SET_MODAL,
      payload: { openModal, title, content }
    })
  }
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// api calls

// get All Notices
export const getAllNotices = () => {

  return apiCall({
    method: 'get',
    url: "/getAllnotices",
    actionType: GET_NOTICES,
    loading: 'getAll'
  });
}
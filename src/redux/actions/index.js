import { 
  SET_LOADING,
  SET_ALERT,
  SET_MODAL,
} from 'redux/types';

// *****************
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

// **************
// modal 
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
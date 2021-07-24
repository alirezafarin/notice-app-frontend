import axios from "axios";

import { logOut, returnToken } from 'globalVariables/helperFunctions';
import { setLoading, setAlert } from 'redux/actions';
import { domain } from "globalVariables";

export const axiosInstance = axios.create({
  baseURL: domain,
  timeout: 10000,
});

const setLoadingCorrectly = (
  prop='',
  actionType='',
  dispatch=null,
  componentProps={},
  status=false
  ) => {
  if( actionType && dispatch ) {
    return setLoading(prop, status, dispatch);
  }
  componentProps.setLoading(prop, status);
}

const setAlertCorrectly = (
  actionType='',
  dispatch=null,
  componentProps={},
  msg=''
  ) => {
  if( actionType && dispatch ) {
    return setAlert(true, msg, 'error', dispatch);
  }
  componentProps.setAlert(true, msg, 'error');
}

const alertErrorMessage = (
  actionType='',
  dispatch=null,
  componentProps={},
  error={}
  ) => {
    let errorData = error.response.data;
    let msg = 'مشکلی در ارتباط با سرور پیش آمده است';
    if(errorData && errorData.error) {
      let errorMsg = errorData.error.split(',')[0];
      if(errorMsg) {
        msg = errorMsg;
      }
    }  
    setAlertCorrectly(actionType, dispatch, componentProps, msg);
  } 

export const apiCall = ({
  method= 'get',
  params= {},
  url= '',
  body= {},
  actionType= '',
  loading= '',
  token=false,
  componentProps= {},
  resolve= ()=>{},
  reject= ()=>{}
}) => {
  return async function(dispatch=null) {
    try {
      setLoadingCorrectly(loading, actionType, dispatch, componentProps, true);
    
      let response = await axiosInstance({
        method: method,
        url: url,
        params: params,
        data: body,
        headers: {
          Authorization: (token) && `Bearer ${returnToken()}`
        }
      })
      .catch((err) => {
        setLoadingCorrectly(loading, actionType, dispatch, componentProps, false);
        alertErrorMessage(actionType, dispatch, componentProps, err);
        reject(err);
      });

      if( response ) {
        if(actionType) {
          let payload = response.data.result;
          dispatch({
              type: actionType,
              payload,
          });      
          setLoadingCorrectly(loading, actionType, dispatch, componentProps, false);
          resolve(response);    
        }
        else {
          resolve(response);
          setLoadingCorrectly(loading, actionType, dispatch, componentProps, false);
          return response;
        }
      }
    } catch (error) {
      setLoadingCorrectly(loading, actionType, dispatch, componentProps, false);
      setAlertCorrectly(actionType, dispatch, componentProps, 'مشکلی پیش آمده است');
    }
  }
}
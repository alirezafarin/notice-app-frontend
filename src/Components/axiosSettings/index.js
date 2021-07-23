import axios from "axios";

import { logOut } from 'globalVariables/helperFunctions';
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

export const apiCall = ({
  method= 'get',
  params= {},
  url= '',
  body= {},
  actionType= '',
  loading= '',
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
          // token: localStorage.getItem('Token')
        }
      })
      .catch((err) => {
        console.log(err);
        setLoadingCorrectly(loading, actionType, dispatch, componentProps, false);
        setAlertCorrectly(actionType, dispatch, componentProps, 'مشکلی در ارتباط با سرور پیش آمده است');
        reject(err);
      });
  
      // after catch end the proccess
      if( !response ) {
        return;
      }
  
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
    } catch (error) {
      setLoadingCorrectly(loading, actionType, dispatch, componentProps, false);
      setAlertCorrectly(actionType, dispatch, componentProps, 'مشکلی پیش آمده است');
    }
  }
}
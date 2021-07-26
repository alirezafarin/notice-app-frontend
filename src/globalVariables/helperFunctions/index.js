import { domain } from "globalVariables";
import placeholder from 'icons/placeholder.jpg';

export const logOut = (deleteUserProfile) => {
  localStorage.removeItem('Token');
  deleteUserProfile();
}

export const returnToken = () => {
  return localStorage.getItem('Token');
}

export const addToken = (token='') => {
  localStorage.setItem("Token", token);
}

export const convertToJalali = (date) => {
  let gy , gm , gd = null;
  gy = Number(date[0]);
  gm = Number(date[1]);
  gd = Number(date[2]);
  
  //changing Georgian data to Jalali
  let g_d_m, jy, jm, jd, gy2, days;
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  gy2 = (gm > 2) ? (gy + 1) : gy;
  days = 355666 + (365 * gy) + parseInt((gy2 + 3) / 4) - parseInt((gy2 + 99) / 100) + parseInt((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
  jy = -1595 + (33 * parseInt(days / 12053));
  days %= 12053;
  jy += 4 * parseInt(days / 1461);
  days %= 1461;
  if (days > 365) {
      jy += parseInt((days - 1) / 365);
      days = (days - 1) % 365;
  }
  if (days < 186) {
      jm = 1 + parseInt(days / 31);
      jd = 1 + (days % 31);
  } else {
      jm = 7 + parseInt((days - 186) / 30);
      jd = 1 + ((days - 186) % 30);
  }
  if(jm<=9){
      jm = '0'+''+jm;
  }
  if(jd<=9){
      jd = '0'+''+jd;
  }
  date[5] = jy.toString();
  date[4] = jm.toString();
  date[3] = jd.toString(); 
  return [date[5], date[4], date[3]];    
}

export const returnImage = (imageName='') => {
  if( imageName ) {
    return domain + '/' + imageName;
  }
  return placeholder;
}
export const logOut = (deleteUserProfile) => {
  localStorage.removeItem('Token');
  deleteUserProfile();
}

export const returnToken = () => {
  return localStorage.getItem('Token');
}
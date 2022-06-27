export const setUserEmail = (email) => {
  const userEmail = { email };
  localStorage.setItem('user', JSON.stringify(userEmail));
};

export const getUserEmail = () => {
  const user = JSON.parse(localStorage.getItem('user')) || '';
  return user.email;
};

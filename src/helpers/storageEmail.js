const setUserEmail = (email) => {
  const userEmail = { email };
  localStorage.setItem('user', JSON.stringify(userEmail));
};

export default setUserEmail;

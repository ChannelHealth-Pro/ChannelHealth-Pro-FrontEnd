export const setRole = (role) => {
  localStorage.setItem("userRole", role);
};

export const getRole = () => {
  return localStorage.getItem("userRole");
};

export const setAuth = (auth) => {
  localStorage.setItem("userAuth", auth);
};

export const getAuth = () => {
  return localStorage.getItem("userAuth");
};

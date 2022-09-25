const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("data") || "[]");
};

export default getLocalStorage;

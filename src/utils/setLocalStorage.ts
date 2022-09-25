import getLocalStorage from "./getLocalStorage";

const setLocalStorage = ({ key, value }) => {
  const newData = [
    {
      ...getLocalStorage[0],
      key: value,
    },
  ];

  localStorage.setItem("data", JSON.stringify(newData));
};

export default setLocalStorage;

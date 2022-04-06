import React, { useState, createContext, useEffect } from "react";

export const CheckItem = createContext({ Checked: false });

const Context = ({ children }) => {
  const [GetFetch, setGetFetch] = useState([]);
  const [Checked, setChecked] = useState([]);

  useEffect(() => {
    fetch("https://624bd6d744505084bc55f4fb.mockapi.io/Birdlist")
      .then((response) => response.json())
      .then((res) => {
        setGetFetch(res);
      });
  }, []);

  const toggleCheck = (targetVal) => {
    if (targetVal.checked) {
      let getVal = GetFetch.find((item) => item.Bird_name === targetVal.value);
      setChecked([...Checked, getVal]);

    } else{
      let notChecked=Checked.filter((item) => item.Bird_name !== targetVal.value);
      setChecked([ ...notChecked]);
    }
  };

  return (
    <CheckItem.Provider value={{ GetFetch, toggleCheck, Checked }}>
      {children}
    </CheckItem.Provider>
  );
};

export default Context;

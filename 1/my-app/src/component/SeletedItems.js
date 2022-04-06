import React, { useContext } from "react";
import ListItem from "./ListItem";
import { CheckItem } from "../CheckItem";

function SeletedItems() {
  const { Checked } = useContext(CheckItem);

  return (
    <>
      <h1>Seleted Items</h1>
      {Checked.map(item => <ListItem val={item.Bird_name} index={item.id} />)}
    </>
  );
}

export default SeletedItems;

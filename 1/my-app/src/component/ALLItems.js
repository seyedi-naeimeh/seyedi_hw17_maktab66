import React, { useContext } from "react";
import { Container, ListGroup, Row } from "react-bootstrap";

import { CheckItem } from "../CheckItem";

function ALLItems() {
  const { GetFetch , toggleCheck } = useContext(CheckItem);
  
 
  const handleCheck = (event) => {
   
    toggleCheck(event.target)
  };

  return (
    <>
      
      <h1>ALL Items</h1>
        <ul>
          {GetFetch.map((item) => (

            <li  key={item.id} >
              <input type="checkbox" value={item.Bird_name} onChange={handleCheck}  />
              {item.Bird_name}
            </li>
          ))}
        </ul>
    </>
      
    
  );
}


export default ALLItems;

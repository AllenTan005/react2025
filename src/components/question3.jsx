import React from 'react'
import { useState,useEffect } from 'react';
import {  Link } from 'react-router-dom';

const question3 = () => {
 let [items, setItems] = useState([
    1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5,
    4, 4, 7, 8, 8, 0, 1, 2, 3, 1,
  ]);

    function getUniqueNumber() {
    const uniqueValues = new Set(items);
    const uniqueArray = [...uniqueValues];
    uniqueArray.sort((a, b) => a - b);

    console.log("after", uniqueArray);
  }

useEffect(() => {
    console.log('before',items)
     getUniqueNumber();
  }, []);

  return (
    <div>
       <p>this is q3 console.log to see answer</p>

      <div style={{ display:"flex", justifyContent:"space-between" }} >
            
                 <Link to="/Q2">Previous</Link>
          
                 <Link to="/Q4">Next</Link>
               
            </div>
    </div>
  )
}

export default question3

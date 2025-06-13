import React from "react";
import {  Link } from 'react-router-dom';

const question5 = () => {
  return (
    <div>
      <p>
        I think void is used when a function just does something but doesnt
        return anything, while never is when a function never returns at all,
        like it crashes or runs forever?
      </p>
          <div style={{ display:"flex", justifyContent:"space-between" }} >
           
              <Link to="/Q4">Previous</Link>
           
            
              <Link to="/Q6">Next</Link>
         
         </div>
    </div>
  );
};

export default question5;

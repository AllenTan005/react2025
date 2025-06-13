import React from 'react'
import {  Link } from 'react-router-dom';
const question4 = () => {
  return (
    <div>
    <p>
        The Virtual DOM (VDOM) is a lightweight copy of the real DOM used in
        libraries like React. Instead of directly updating the browser's DOM
        every time something changes, updates are first made in the Virtual DOM.
        Then, a diffing algorithm compares the old and new Virtual DOM to find
        the minimal changes needed, and only those updates are applied to the
        real DOM. This improves performance by reducing the number of expensive
        DOM operations and ensures the UI updates efficiently and correctly.
      </p>
        <div style={{ display:"flex", justifyContent:"space-between" }} >
        
              <Link to="/Q3">Previous</Link>
          
              <Link to="/Q5">Next</Link>
           
         </div>
    </div>
  )
}

export default question4

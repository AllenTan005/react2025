import React from "react";
import {  Link } from 'react-router-dom';
const question6 = () => {
  return (
    <div>
      <p>
        A framework-based website is built using libraries or frameworks such as
        React, Angular, or Vue. These frameworks provide a predefined structure,
        reusable components, and tools that help streamline development,
        especially for complex, scalable applications. On the other hand, a
        non-framework (or vanilla) website is developed using plain HTML, CSS,
        and JavaScript without any abstraction layer. While this approach gives
        developers full control and minimal overhead, it can become difficult to
        manage and scale as the project grows. Frameworks aim to improve
        developer productivity, maintainability, and consistency, whereas
        non-framework solutions may be more lightweight but require more manual
        effort for common tasks like DOM manipulation, state handling, and
        routing.
      </p>
            <div style={{ display:"flex", justifyContent:"space-between" }} >
         
              <Link to="/Q5">Previous</Link>
          
              <Link to="/Q7">Next</Link>
            
         </div>
    </div>
  );
};

export default question6;

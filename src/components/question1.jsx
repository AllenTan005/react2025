import { useState, useEffect, use } from "react";
import {  Link } from 'react-router-dom';
import Editor from 'react-simple-code-editor';

const question1 = () => {

   const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

const users = [
  { firstName: 'Allen', lastName: 'Tan', customerID: '002', note: '', profession: 'student' },
  { firstName: 'Kelvin', lastName: 'Lee', customerID: '001', note: '', profession: 'productOwner' },
  { firstName: 'Jenny', lastName: '', customerID: '003', note: '', profession: 'systemAnalytics' },
  { firstName: 'Dexter', lastName: 'Yao', customerID: '004', note: '', profession: 'engineer' },
  { firstName: 'Panda', lastName: 'Wu', customerID: '005', note: '', profession: 'freelancer' },
  { firstName: 'Zoe', lastName: 'Apple', customerID: '006', note: '', profession: 'engineer' }
];

const professionOrder = {
  systemAnalytics: 5,
  engineer: 4,
  productOwner: 3,
  freelancer: 2,
  student: 1
};


   const sortedByFullName = [...users].sort((a, b) => {
    const aKey = (a.firstName + a.lastName + a.customerID).toLowerCase();
    const bKey = (b.firstName + b.lastName + b.customerID).toLowerCase();
    return aKey.localeCompare(bKey);
  });

  // Q2: Sort by profession order
  const sortedByProfession = [...users].sort((a, b) => {
    return professionOrder[b.profession] - professionOrder[a.profession];
  });







  return  <div style={{ padding: '1rem' }}>
      <h2>Q1. Sorted by FullName + CustomerID</h2>
      <ul>
        {sortedByFullName.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} ({user.customerID}) - {user.profession}
          </li>
        ))}
      </ul>

      <h2>Q2. Sorted by Profession Order</h2>
      <ul>

        {sortedByProfession.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} ({user.customerID}) - {user.profession}
          </li>
        ))}
      </ul>
           <div style={{ display:"flex", justifyContent:"space-between" }} >
        
            
              <Link to="/Q2">Next</Link>
           
         </div>
         <p>Code</p>
         <div>

         </div>
    </div>;
};

export default question1;

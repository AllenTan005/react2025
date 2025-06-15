// export default question1;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const UserSorter = () => {
  useEffect(() => {
    const users = [
      {
        firstName: "Allen",
        lastName: "Tan",
        customerID: "002",
        note: "",
        profession: "student",
      },
      {
        firstName: "Kelvin",
        lastName: "Lee",
        customerID: "001",
        note: "",
        profession: "productOwner",
      },
      {
        firstName: "Jenny",
        lastName: "",
        customerID: "003",
        note: "",
        profession: "systemAnalytics",
      },
      {
        firstName: "Dexter",
        lastName: "Yao",
        customerID: "001",
        note: "",
        profession: "engineer",
      },
      {
        firstName: "Panda",
        lastName: "Wu",
        customerID: "003",
        note: "",
        profession: "freelancer",
      },
    ];

    const sortUserName = (users) => {
      return [...users].sort((a, b) => {
        const keyA = `${a.firstName}${a.lastName}${a.customerID}`;
        const keyB = `${b.firstName}${b.lastName}${b.customerID}`;
        return keyA.localeCompare(keyB);
      });
    };

    const sortByType = (users) => {
      const professionOrder = {
        systemAnalytics: 1,
        engineer: 2,
        productOwner: 3,
        freelancer: 4,
        student: 5,
      };
      return [...users].sort(
        (a, b) => professionOrder[a.profession] - professionOrder[b.profession]
      );
    };

    const sortedByName = sortUserName(users);
    const sortedByProfession = sortByType(users);

    console.log("Sorted by Name + ID: ");
    console.log(
      "In this question, we need to sort the array by combining firstName, lastName, and customerID as a single string and sort them alphabetically.This helps ensure a consistent sorting even when some users may have the same first or last name."
    );
    console.table(sortedByName);

    console.log("Sorted by Profession:");
    console.log(
      "We sort the list based on a custom priority for the profession field:systemAnalytics > engineer > productOwner > freelancer > student.To do this, we assign each profession a ranking number and sort the array using that order."
    );

    console.table(sortedByProfession);
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Q1. Sorted by FullName + CustomerID console.log to see result</h2>

      <div style={{ display: "flex", justifyContent: "space-between" ,      marginTop: '25px',
        padding: '15px',
        backgroundColor: '#f8f8f8',
        border: '1px dashed #ccc',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#777',
        marginBottom: '25px' }}>
        <Link
        
        to="/Q2">Next question click here proceed to Q2</Link>
      </div>
                    <div style={{
        marginTop: '25px',
        padding: '15px',
        backgroundColor: '#f8f8f8',
        border: '1px dashed #ccc',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#777',
        marginBottom: '25px'
      }}>
              <a href="https://github.com/AllenTan005/react2025/blob/main/src/components/question1.jsx" target="_blank" rel="noopener noreferrer" >code here</a>

      </div>
      <div></div>
    </div>
  );
};

export default UserSorter;

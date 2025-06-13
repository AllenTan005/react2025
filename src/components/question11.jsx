import React from 'react'
import { useRef } from 'react'; 

const question11 = () => {
  const inputRef = useRef(null);


function SearchButton({ onSearchClick }) {
  return (
    <button onClick={onSearchClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '10px'
      }}>
      Search
    </button>
  );
}

function SearchInput({ inputRef }) {
  return (
    <input
      ref={inputRef} 
      type="text"
      placeholder="Type to search..."
      style={{
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '250px'
      }}
    />
  );
}

  const handleSearchClick = () => {
 
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
          <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center'
      }}>
      
        <SearchInput inputRef={inputRef} />
   
        <SearchButton onSearchClick={handleSearchClick} />
      </div>
    </div>
  )
}

export default question11

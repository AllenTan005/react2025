import { useRef } from 'react'; // Import useRef

// SearchButton component
// It now receives a prop 'onSearchClick' which is a function to call when clicked.
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

// SearchInput component
// It now receives a prop 'inputRef' which is the ref created in the parent.
function SearchInput({ inputRef }) {
  return (
    <input
      ref={inputRef} // Attach the ref to the actual input DOM element
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

// Parent Page component
export default function Page() {
  // 1. Create a ref using useRef. This ref will point to the input element.
  const inputRef = useRef(null);

  // Function to handle the search button click
  const handleSearchClick = () => {
    // 3. Access the input DOM element via the ref and call its focus() method.
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* 2. Pass the ref to SearchInput */}
        <SearchInput inputRef={inputRef} />
        {/* Pass the handler to SearchButton */}
        <SearchButton onSearchClick={handleSearchClick} />
      </div>
    </div>
  );
}
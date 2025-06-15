import { useRef } from "react";

function SearchButton({ onSearchClick }) {
  return (
    <button
      onClick={onSearchClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "10px",
      }}
    >
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
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "250px",
      }}
    />
  );
}

export default function Page() {
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          backgroundColor: "#f0f2f5",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchInput inputRef={inputRef} />

          <SearchButton onSearchClick={handleSearchClick} />
        </div>
      </div>
      <div
        style={{
          marginTop: "25px",
          padding: "15px",
          backgroundColor: "#f8f8f8",
          border: "1px dashed #ccc",
          borderRadius: "8px",
          textAlign: "center",
          color: "#777",
          marginBottom: "25px",
        }}
      >
        <a
          href="https://github.com/AllenTan005/react2025/blob/main/src/components/question10.jsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          code here
        </a>
      </div>
    </div>
  );
}

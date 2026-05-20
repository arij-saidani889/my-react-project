import React from "react";

// Header Component
const Header = () => <h1>My Hacker News App</h1>;

// Search Component
const Search = () => {
  // Event handler for input changes
  const handleChange = (event) => {
    console.log("Typed value:", event.target.value);
    console.log("Input updated!");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange} // <-- Event handler here
      />
    </div>
  );
};

// List Component
const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li> // Arrow function inside map
      ))}
    </ul>
  );
};

// App Component
const App = () => {
  const stories = [
    { id: 1, title: "React 18 Released" },
    { id: 2, title: "Vite + React = Fast!" },
    { id: 3, title: "Arrow Functions in JS" },
  ];

  return (
    <div>
      <Header />
      <Search />
      <List items={stories} />
    </div>
  );
};

export default App;
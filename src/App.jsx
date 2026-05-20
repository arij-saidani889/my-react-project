// Week 6: Props, State & Filtering

import { useState } from 'react';

const App = () => {
  // Step 1: Data moved inside App
  const stories = [
    { title: 'React', url: 'https://reactjs.org/', author: 'Jordan Walke', num_comments: 3, points: 4, objectID: 0 },
    { title: 'Redux', url: 'https://redux.js.org/', author: 'Dan Abramov', num_comments: 2, points: 5, objectID: 1 },
  ];

  // Step 4: State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Step 5: Handler passed to Search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Step 8: Filter stories based on searchTerm
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('App renders');

  return (
    <div>
      <Header title="My Hacker Stories" />
      <Search onSearch={handleSearch} />
      <List list={filteredStories} />
    </div>
  );
};

const Header = ({ title }) => <h1>{title}</h1>;

const Search = ({ onSearch }) => {
  console.log('Search renders');
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={onSearch} />
    </div>
  );
};

// Step 2: List receives stories via props
const List = ({ list }) => {
  console.log('List renders');
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

// Step 3: Item is its own component
const Item = ({ item }) => (
  <li>
    <a href={item.url}>{item.title}</a> — {item.author}
  </li>
);

/*
  Step 10 – Reflection:
  1. Props are read-only data passed from parent to child. State is data owned by a component that can change over time.
  2. We lift state up so a parent can share data with multiple children.
  3. Filtering logic should live in App, since it owns both the data and the search term.
*/

export default App;
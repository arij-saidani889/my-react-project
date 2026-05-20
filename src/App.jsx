// Week 9: Data Fetching, Loading & Error Handling

import { useState, useEffect } from 'react';

// Step 1: API endpoint
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const App = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') || 'React'
  );

  // Step 13: URL state to control when fetch happens
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  const [stories, setStories] = useState([]);

  // Step 7: Loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Step 2: useEffect fetches when url changes
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Step 4: Extract hits from API response
        setStories(data.hits);
        setIsLoading(false);
      })
      .catch(() => {
        // Step 9: Set error state
        setIsError(true);
        setIsLoading(false);
      });
  }, [url]); // Step 15: depends on url not searchTerm

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Step 14: Update url only on button click
  const handleSubmit = () => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
  };

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => story.objectID !== item.objectID
    );
    setStories(newStories);
  };

  return (
    <div>
      <Header title="My Hacker Stories" />

      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      {/* Step 12: Submit button, disabled when empty */}
      <button
        onClick={handleSubmit}
        disabled={!searchTerm}
      >
        Submit
      </button>

      {/* Step 10: Error message */}
      {isError && <p>Something went wrong. Please try again.</p>}

      {/* Step 8: Conditional rendering for loading */}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

const Header = ({ title }) => <h1>{title}</h1>;

const InputWithLabel = ({ id, value, onInputChange, children }) => (
  <div>
    <label htmlFor={id}>{children}</label>
    <input
      id={id}
      type="text"
      value={value}
      onChange={onInputChange}
    />
  </div>
);

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => (
  <li>
    <a href={item.url}>{item.title}</a> — {item.author}
    <button onClick={() => onRemoveItem(item)}>Delete</button>
  </li>
);

/*
  Step 17 – Reflection:
  1. useEffect is used for fetching because it runs after render and handles side effects cleanly.
  2. Loading state means data is being fetched. Error state means something went wrong during fetch.
  3. We control when fetching happens to avoid unnecessary API calls on every keystroke.
*/

export default App;
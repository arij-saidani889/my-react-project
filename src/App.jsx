// Week 5: Arrow Functions & Event Handlers

const App = () => {
  const stories = [
    { title: 'React', url: 'https://reactjs.org/', author: 'Jordan Walke', num_comments: 3, points: 4, objectID: 0 },
    { title: 'Redux', url: 'https://redux.js.org/', author: 'Dan Abramov', num_comments: 2, points: 5, objectID: 1 },
  ];

  return (
    <div>
      <Header title="My Hacker Stories" />
      <Search />
      <List list={stories} />
    </div>
  );
};

const Header = ({ title }) => <h1>{title}</h1>;

const Search = () => {
  // Step 5: Event handler using arrow function
  const handleChange = (event) => {
    // Step 6: Logging the full event object
    console.log(event);

    // Step 7: Log only the typed value + a second message
    console.log(event.target.value);
    console.log('User is typing...');
  };

  // Step 4: Block body used here because we have logic (handler) inside
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

// Step 3: Concise body arrow function inside map()
const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  <li>
    <a href={item.url}>{item.title}</a> — {item.author}
  </li>
);

/*
  Step 8 – Reflection:
  1. Concise body arrow functions: used when the function only returns a single expression (no logic needed).
  2. Block body arrow functions: used when we need to add logic, like event handlers or variables.
  3. The event object contains info about the browser event: target element, value typed, key pressed, etc.
*/

export default App;
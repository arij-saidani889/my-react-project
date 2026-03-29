const stories = [
  {
  objectID: "4",
  title: "Learning React is fun",
  url: "https://react.dev/learn",
  author: "Ali",
  points: 200,
  num_comments: 80,
}
  {
    objectID: "1",
    title: "React is amazing",
    url: "https://react.dev",
    author: "Arij",
    points: 120,
    num_comments: 45,
  },
  {
    objectID: "2",
    title: "Vite makes development faster",
    url: "https://vitejs.dev",
    author: "John",
    points: 98,
    num_comments: 30,
  },
  {
    objectID: "3",
    title: "JavaScript is powerful",
    url: "https://developer.mozilla.org",
    author: "Sara",
    points: 150,
    num_comments: 60,
  },
];

function App() {
  return (
    <div>
      <h1>Hacker News Style Stories</h1>

      {stories.map((story) => {
        return (
          <div key={story.objectID}>
            <h3>
              <a href={story.url} target="_blank" rel="noreferrer">
                {story.title}
              </a>
            </h3>

            <p>Author: {story.author}</p>

            <span>Points: {story.points}</span>
            <br />
            <span>Comments: {story.num_comments}</span>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
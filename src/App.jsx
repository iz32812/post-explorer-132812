import {useEffect, useState} from 'react'

import './App.css'

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error)
          setError(error.message)
          setLoading(false);
        })
  }, [])


  if (loading) return <div>Loading...</div>

  if (error) return <div>Error: {error}</div>;


  return (
      <div>
        <h1>Posts</h1>

        {posts.map((post) => {
          return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
          );
        })}
      </div>
  );
}
export default App

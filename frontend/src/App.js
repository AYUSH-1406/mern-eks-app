// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState("");

//   const API_URL = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/api/todos`)
//       .then(res => setTodos(res.data))
//       .catch(err => console.error("GET failed", err));
//   }, [API_URL]);

//   const addTodo = () => {
//     if (!title.trim()) {
//       alert("Title cannot be empty");
//       return;
//     }

//     axios
//       .post(`${API_URL}/api/todos`, {
//         title: title,
//         completed: false
//       })
//       .then(res => {
//         setTodos([...todos, res.data]);
//         setTitle("");
//       })
//       .catch(err => console.error("POST failed", err));
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>To-Do App</h2>

//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />

//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map(todo => (
//           <li key={todo._id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get("/api/todos")
      .then(res => setTodos(res.data))
      .catch(err => console.error("GET failed", err));
  }, []);

  const addTodo = () => {
    if (!title.trim()) {
      alert("Title cannot be empty");
      return;
    }

    axios
      .post("/api/todos", {
        title: title,
        completed: false
      })
      .then(res => {
        setTodos([...todos, res.data]);
        setTitle("");
      })
      .catch(err => console.error("POST failed", err));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>To-Do App</h2>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
    .then((response) => response.json())
    .then((data) => setItems(data));
  }, []);

  return (
    <div className="App">
      {
        items.map((item) => {
          return (<div key={item.id}>{item.title}</div>);
        })
      }
    </div>
  )
}

export default App;
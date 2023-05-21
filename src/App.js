import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
    .then((response) => response.json())
    .then((data) => setItems(data));
  }, []);

  return (
    <>
    <Header />

    <section>
      <nav>
      {
        items.map((item) => {
          return (<div key={item.id}>{item.title}</div>);
        })
      }
      </nav>
    </section>
    
    <Footer />
    </>
  )
}

export default App;
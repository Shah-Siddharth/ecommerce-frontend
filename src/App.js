import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./components/Category";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
    .then((response) => response.json())
    .then((data) => setCategories(data));
  }, []);

  const handleCategoryClick = (id) => {
    fetch('http://localhost:3001/products?categoryId=' + id)
    .then((response) => response.json())
    .then((data) => setProducts(data));
  }


  const renderCategories = () => {
    return categories.map((c) => {
      return <Category key={c.id} id={c.id} title={c.title} handleClick={handleCategoryClick}/>
    })
  }

  const renderProducts = () => {
    return products.map((p) => {
      return <div className="product" key={p.id}>{p.title}</div>
    })
  }


  return (
    <>
    <Header />
    <nav>
      {categories && renderCategories()}
    </nav>
    <div>
      {products && renderProducts()}
    </div>
    <Footer />
    </>
  )
}

export default App;
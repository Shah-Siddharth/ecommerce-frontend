import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./components/Category";
import fetcher from "./helpers/fetcher";

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []});
  const [products, setProducts] = useState({errorMessage: '', data: []});

  useEffect(() => {
    fetcher('/categories').then((data) => setCategories(data));
  }, []);

  const handleCategoryClick = (id) => {
    fetcher(`/products?categoryId=${id}`).then((data) => setProducts(data));
  }

  const renderCategories = () => {
    return categories.data.map((c) => {
      return <Category key={c.id} id={c.id} title={c.title} handleClick={handleCategoryClick}/>
    })
  }

  const renderProducts = () => {
    return products.data.map((p) => {
      return <div className="product" key={p.id}>{p.title}</div>
    })
  }


  return (
    <>
    <Header />
    <nav>
      {categories.errorMessage && <div>{categories.errorMessage}</div>}
      {categories.data && renderCategories()}
    </nav>
    <div>
      {products.errorMessage && <div>{products.errorMessage}</div>}
      {products.data && renderProducts()}
    </div>
    <Footer />
    </>
  )
}

export default App;
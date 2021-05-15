import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/products";
import Header from "./Header";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import EditProduct from "./EditProduct";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await api.get("/products");
    setLoading(false);
    return response.data;
  };

  const onSearch = async (text) => {
    const response = await api.get(`/products/search/${text}`);
    if (response) {
      setSearchResults(response.data);
    }
  };

  const addProductHandler = async (product) => {
    const request = {
      ...product,
    };

    const response = await api.post("/products", request);
    setProducts([...products, response.data]);
  };

  const updateProductHandler = async (product) => {
    const response = await api.put(`products/${product.id}`, product);
    const { id } = response.data;
    setProducts(
      products.map((product) => {
        return product.id === id ? { ...response.data } : product;
      })
    );
  };

  const removeProductHandler = async (id) => {
    await api.delete(`/products/${id}`);
    const newProductList = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(newProductList);
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await fetchProducts();
      if (allProducts) setProducts(allProducts);
    };
    getAllProducts();
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              loading ? (
                <div className="loading">Loading...</div>
              ) : (
                <div>
                  <SearchBar onSearch={onSearch} />
                  <ProductList
                    {...props}
                    products={products}
                    getProductId={removeProductHandler}
                  />
                </div>
              )
            }
          />
          <Route
            path="/add"
            render={(props) => (
              <AddProduct {...props} addProductHandler={addProductHandler} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <EditProduct
                {...props}
                updateProductHandler={updateProductHandler}
              />
            )}
          />
          <Route path="/product/:id" component={ProductDetail} />
          <Route
            path="/search"
            render={(props) => (
              <SearchList
                {...props}
                products={searchResults}
                getProductId={removeProductHandler}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

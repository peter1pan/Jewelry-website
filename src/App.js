import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from 'react';

//pages
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Store } from "./pages/Store";
import { Basket } from "./pages/Basket";

//layouts
import { MainLayout } from "./layouts/MainLayout";
//context
import ProductContext from "./context/ProductsContext";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/shop", element: <Store /> },
      { path: "/shop/:id", element: <Details /> },
      { path: "/basket", element: <Basket /> }
    ]
  }
])

function App() {
  const [products] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sepeteEklendi, setSepeteEklendi] = useState(false);


  const handleAddToBasket = () => {
    setSepeteEklendi(true);
    setTimeout(() => {
      setSepeteEklendi(false);
    }, 2000);
  };
  const selectProduct = (product) => {
    handleAddToBasket()
    const index = selectedProducts.findIndex(item => item.product.id === product.id);
    if (index > -1) {
      const updatedList = selectedProducts.map(item => {
        if (item.product.id === product.id) {
          item.count += 1;
          item.totalPrice = item.count * item.product.price;
        }
        return item;
      });

      setSelectedProducts(updatedList);
    } else {
      const newProduct = {
        count: 1,
        product: product,
        totalPrice: product.price
      };

      setSelectedProducts(prevSelectedProducts => [...prevSelectedProducts, newProduct]);
    }
  };
  const deleteProduct = (product) => {
    const index = selectedProducts.findIndex(item => item.product.id === product.id);

    if (index > -1) {
      const updatedList = selectedProducts.filter(item => item.product.id !== product.id);
      setSelectedProducts(updatedList);

    }

  };
  const handleDecrease = (item) => {
    if (item.count > 1) {
      const updatedList = selectedProducts.map((selectedItem) => {
        if (selectedItem.product.id === item.product.id) {
          selectedItem.count -= 1;
          selectedItem.totalPrice = selectedItem.count * selectedItem.product.price;
        }
        return selectedItem;
      });
      setSelectedProducts(updatedList);
    }
  };
  const handleIncrease = (item) => {
    const updatedList = selectedProducts.map((selectedItem) => {
      if (selectedItem.product.id === item.product.id) {
        selectedItem.count += 1;
        selectedItem.totalPrice = selectedItem.count * selectedItem.product.price;
      }
      return selectedItem;
    });
    setSelectedProducts(updatedList);
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, selectProduct, products, deleteProduct, sepeteEklendi, handleDecrease, handleIncrease }}>
      <RouterProvider router={router} />
    </ProductContext.Provider>
  )
}

export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../src/NavBar/Navbar'
import Home from "../src/Home/Home.js";
import Products from './Products/products'
import ProductsDetails from './Products/ProductsDetails';
import UpdateProduct from './Products/UpdateProduct'
import CreateProduct from './Products/CreateProduct'

let App=()=> {
  return (
    <>
     <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/big-basket" element={<Home />} />
          <Route path="/home" element={<Products />} />
          <Route path="/productsdetials" element={<ProductsDetails />} />
          <Route path="/createnewproduct" element={<CreateProduct />} />
          <Route path="/productupdate" element={<UpdateProduct />} />


        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;

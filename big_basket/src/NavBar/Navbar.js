import React from "react"
import { Link } from "react-router-dom";

let Navbar =()=>{
    return(
        <>
        
<nav class="navbar navbar-expand-lg bg-body-tertiary  ">
  <div class="container-fluid ">

    <Link class="navbar-brand text-white" to="/big-basket"><i class="fa-solid fa-cart-shopping"> <span>Big-Basket</span></i> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/home">Home</Link>
        </li>


        <li class="nav-item">
          <Link class="nav-link text-white " to="/productsdetials">Products</Link>
        </li>
       
       
       
       
      </ul>
      <span class="navbar-text ms-auto p-2 text-white ">Admin</span>

    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;
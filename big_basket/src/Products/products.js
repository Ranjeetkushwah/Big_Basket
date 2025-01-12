import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
// import { useLocation } from 'react-router-dom'



let Products = () => {

    let [ProductHome, setProductHome] = useState([])



    useEffect(() => {

        let url = " http://127.0.0.1:5000/api/products"
        axios.get(url).then((response) => {
            setProductHome(response.data.product)
        }).catch((error) => {
            console.log(error)
        })
    }, [])




    //  const location =useLocation();
    //  console.log(location.state)






    return (
        <>
{/* <pre>{JSON.stringify(ProductHome)}</pre> */}
          
                <div className='container '>
                    <h1 className='text-light-green'>Product Page</h1>
                    <p className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla alias accusamus a tempora molestias possimus explicabo maiores impedit dicta!.</p>



                    <div className=' container mt-3 ' >
                       
                         <div className='row '>

                            <div className=' cardAlgin   '>
                             {ProductHome.map((Product, index) => {

                                    return (
                                        <>
                                            {(index + 1) <= 4 ?       <div className='card m-5 d-flex' >
                                                <div className='card-header  ' >

                                                    <div className='d-flex justify-content-center'>
                                                        <img src={Product.image} title={Product.name} width={200} height={250} />
                                                    </div>

                                                </div>
                                                  <div className='card-body'>   
                                                  <Link to="/productsdetials"  >     <div className="card m-2">  
                                                        <ul className="list-group list-group-flush">
                                                            <li className="list-group-item product_li">
                                                                Name: {Product.name}
                                                            </li>

                                                            <li className="fw-bold  list-group-item">Price: {Product.price}</li>

                                                            <li className="fw-bold list-group-item "> Quantity: {Product.quantity}</li>
                                                        </ul>
                                                    </div> </Link>



                                                </div>

                                            </div >  : null}     



                                        </>
                                    )
                                })}


                            </div>

                 

                        </div> 

                    </div>

                </div >


         
        </>
    )
}
export default Products;




import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



let UpdateProduct = () => {



    // let [productToshow, setproductToshow] = useState([])


    // Product =                       

    let [Product, setProduct] = useState(
        {
            _id: "",
            name: "",
            image: "",
            price: "",
            quantity: "",
            info: "",

        }
    )




    const location = useLocation();
    let navigate = useNavigate();
    //  console.log(location.state.Product)
    useEffect(() => {

        // setproductToshow(location.state.Product)
        if (location.state && location.state.Product) {

            setProduct(location.state.Product)
        }
    }, [location.state])




    let updateToProduct = (e) => {

        setProduct({ ...Product, [e.target.name]: e.target.value })

    }


    //    upadate the image




    let updateImage = async (e) => {
        let imageFile = e.target.files[0];

        let base64Image = await convertBase64String(imageFile);
        setProduct({
            ...Product,
            image: base64Image

        });


    };
    let convertBase64String = (imageFile) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile);
            fileReader.addEventListener('load', () => {
                if (fileReader.result) {
                    resolve(fileReader.result);
                }
                else {
                    reject('Error Occurred');
                }
            })
        });

    };
  

    let updateNowProduct = async (e, product_id) => {
        console.log(Product._id)
        e.preventDefault();


        let updateUrl = ` http://127.0.0.1:5000/api/products/${Product._id}`
        axios.put(updateUrl, Product).then((response) => {
            console.log(response)
            navigate('/productsdetials')
        }).catch((error) => {
            console.log(error)
            alert('Failed to update the product. Please try again.');


        })
    }


    return (
        <>


            {/* <pre>{JSON.stringify(productToshow._id)}</pre>
{

productToshow.map((product,index)=>{



    return(
        <>
    <h1>{product.name}</h1>

        </>
    )
})
} */}

            <div className='container'>
                <h1 className='text-light-green'>Update product</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam consectetur pariatur impedit numquam, soluta vero aperiam, adipisci animi consequatur assumenda inventore voluptates maxime. Iste repellat incidunt velit ipsum dolorum!</p>
                <div className='row'>
                    <div className='col-5  '>
                        <div className='card ' >
                            <div className='card-header bg-secondary text-white'>
                                <h1>Seleted Product</h1>
                            </div>

                            <form onSubmit={updateNowProduct}>

                                <div className='card-body '>




                                    <label>Enter product name </label>
                                    <input className='form-control mb-3 ' name='name' value={Product.name} onChange={updateToProduct} type="text" placeholder='enter product name' />

                                    <label>Upload image of product </label>
                                    <input className='form-control mb-3' name='image'  onChange={updateImage} type="file" />

                                    {Product.image && (
                                        <div className="mt-3">
                                            <p>Currently selected image:</p>
                                            <img
                                                src={Product.image}
                                                alt="Product Preview"
                                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    )}

                                    <label>Enter the product price in Ruppe "₹"  </label>
                                    <input className='form-control mb-3' name='price' value={Product.price} onChange={updateToProduct} type="number" placeholder='enter product price in Rs/- ' />

                                    <label>Enter the product Quantity in Kilogram</label>
                                    <input className='form-control mb-3' name='quantity' value={Product.quantity} onChange={updateToProduct} type="number" placeholder='Enter the product Quantity' />


                                    <label>Enter Product description</label>
                                    <textarea className='form-control mb-3' name='info' value={Product.info} onChange={updateToProduct} maxLength='200' > Enter Product description</textarea>


                                </div>


                                <div className='card-footer bg-white'>

                                    <button type="submit" class="btn btn-sm btn-outline-light updatebotton m-2 fs-4 ">Update</button>

                                </div>
                            </form>




                        </div>
                    </div>

                </div>


            </div>










        </>
    )
}


export default UpdateProduct;















































































// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const UpdateProduct = () => {
//     const [product, setProduct] = useState({
//         _id: '',
//         name: '',
//         image: '',
//         price: '',
//         quantity: '',
//         info: '',
//     });

//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (location.state && location.state.Product) {
//             setProduct(location.state.Product);
//         }
//     }, [location.state]);

//     const handleInputChange = (e) => {
//         setProduct({ ...product, [e.target.name]: e.target.value });
//     };

//     const handleImageChange = async (e) => {
//         const imageFile = e.target.files[0];
//         const base64Image = await convertBase64String(imageFile);
//         setProduct({ ...product, image: base64Image });
//     };

//     const convertBase64String = (imageFile) => {
//         return new Promise((resolve, reject) => {
//             const fileReader = new FileReader();
//             fileReader.readAsDataURL(imageFile);
//             fileReader.onload = () => resolve(fileReader.result);
//             fileReader.onerror = () => reject('Error reading file');
//         });
//     };

//     const updateProduct = async (e) => {
//         e.preventDefault();
//         try {
//             const updateUrl = `http://127.0.0.1:5000/api/products/${product._id}`;
//             const response = await axios.put(updateUrl, product);
//             console.log(response.data);
//             alert('Product updated successfully!');
//             navigate('/productsdetails'); // Adjust the path as needed
//         } catch (error) {
//             console.error('Error updating product:', error);
//             alert('Failed to update the product. Please try again.');
//         }
//     };

//     return (
//         <div className="container">
//             <h1 className="text-light-green">Update Product</h1>
//             <p>
//                 Update the product details below and click on "Update" to save the changes.
//             </p>
//             <div className="row">
//                 <div className="col-5">
//                     <div className="card">
//                         <div className="card-header bg-secondary text-white">
//                             <h1>Selected Product</h1>
//                         </div>
//                         <form onSubmit={updateProduct}>
//                             <div className="card-body">
//                                 <label>Enter product name</label>
//                                 <input
//                                     className="form-control mb-3"
//                                     name="name"
//                                     value={product.name}
//                                     onChange={handleInputChange}
//                                     type="text"
//                                     placeholder="Enter product name"
//                                 />

//                                 <label>Upload image of product</label>
//                                 <input
//                                     className="form-control mb-3"
//                                     name="image"
//                                     type="file"
//                                     onChange={handleImageChange}
//                                 />

//                                 <label>Enter the product price in {"Rupee (₹)"}</label>
//                                 <input
//                                     className="form-control mb-3"
//                                     name="price"
//                                     value={product.price}
//                                     onChange={handleInputChange}
//                                     type="number"
//                                     placeholder="Enter product price in Rs/-"
//                                 />

//                                 <label>Enter the product quantity in Kilogram</label>
//                                 <input
//                                     className="form-control mb-3"
//                                     name="quantity"
//                                     value={product.quantity}
//                                     onChange={handleInputChange}
//                                     type="number"
//                                     placeholder="Enter the product quantity"
//                                 />

//                                 <label>Enter product description</label>
//                                 <textarea
//                                     className="form-control mb-3"
//                                     name="info"
//                                     value={product.info}
//                                     onChange={handleInputChange}
//                                     maxLength="200"
//                                     placeholder="Enter product description"
//                                 />
//                             </div>
//                             <div className="card-footer bg-white">
//                                 <button type="submit" className="btn btn-sm btn-outline-light update-button m-2 fs-4">
//                                     Update
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateProduct;

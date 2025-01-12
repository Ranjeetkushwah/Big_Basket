import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

let CreateProduct = () => {

    let newProduct = {
        name: "",
        image: "",
        price: "",
        quantity: "",
        info: "",

    }

    let [createProduct, setcreateProduct] = useState(newProduct)



    let createdProduct = (e) => {

        setcreateProduct({ ...createProduct, [e.target.name]: e.target.value })

    }


    // updateImage
    let updateImage = async (e) => {
        let imageFile = e.target.files[0];

        let base64Image = await convertBase64String(imageFile);
        setcreateProduct({
            ...createProduct,
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


    let navigate = useNavigate();



    let sendCreatedProduct = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:5000/api/products", createProduct).then((res) => {
            // console.log(request.param.product_id,"sds")
            console.log(res)
            navigate('/productsdetials')
        }).catch((error) => {
            console.log(error, 'error is ')
        })


    }





    return (
        <>
            {/* <pre>{JSON.stringify(createProduct)}</pre> */}
            <div className='container'>
                <h1 className='text-light-green'>Create new product</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam consectetur pariatur impedit numquam, soluta vero aperiam, adipisci animi consequatur assumenda inventore voluptates maxime. Iste repellat incidunt velit ipsum dolorum!</p>

                <div className='row'>
                    <div className='col-5  '>
                        <div className='card ' >
                            <div className='card-header bg-secondary text-white'>
                                <h1>New Product</h1>
                            </div>
                            <form onSubmit={sendCreatedProduct}>

                                <div className='card-body '>


                                    <label>Enter product name </label>
                                    <input className='form-control mb-3 ' name='name' value={createProduct.name} onChange={createdProduct} type="text" placeholder='enter product name' />
                                    <label>Upload image of product </label>

                                    <input className='form-control mb-3' name='image' onChange={updateImage} type="file" />
                                    <label>Enter the product price</label>
                                    <input className='form-control mb-3' name='price' value={createProduct.price} type="number" onChange={createdProduct} placeholder='enter product price in Rs/- ' />

                                    <label>Enter the product Quantity available</label>
                                    <input className='form-control mb-3' name='quantity' value={createProduct.quantity} type="number" onChange={createdProduct} placeholder='Enter the product Quantity' />

                                    <label>Enter Product description</label>
                                    <textarea className='form-control mb-3' name='info' value={createProduct.info} onChange={createdProduct} maxLength='150'  > Genral info</textarea>

                                </div>
                                <div className='card-footer bg-white'>

                                    <button     type="submit" class="btn btn-md btn-outline-light createbutton fs-4 m-2 ">Create  </button>
                                    {/* onClick={sendCreatedProduct}  */}
                                </div>
                              
                                    </form>

                                </div>
                        </div>

                    </div>


                </div>



            </>
            )
}

            export default CreateProduct;
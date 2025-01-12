import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



let ProductsDetails = () => {

  let [ProductDetails, setProductdetials] = useState([]);

let getAllProducts=()=>{
  let url = "http://127.0.0.1:5000/api/products";
  axios.get(url).then((response) => {
      setProductdetials(response.data.product)
    
    }).catch((error) => {
      console.log(error);
    });
}



  let navigate = useNavigate();

  
  useEffect(() => {

    getAllProducts();
   
  }, []);


 // sir ka code
  
let DeleteProduct=(productId)=>{
  console.log(productId)
  let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
  axios.delete(dataURL).then((response) => {
      getAllProducts();
  }).catch((error) => {
      console.error(error);
  });


}


 


  function dataUpate(Product) {
    navigate("/productupdate", { state: { Product: Product } });
  }
  

   

  return (
    <>
{/* <pre>{JSON.stringify(ProductDetails)}</pre> */}

      <div className="container">
        <h1 className="text-light-green">Product Deatils</h1>
        <p className="fs-5 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          veniam sapiente quia provident consequatur voluptatibus repellat
          numquam labore magni incidunt ea fugiat nobis illum rerum impedit
          molestias quibusdam deserunt voluptatum?
        </p>

        <button onClick={() => navigate("/createnewproduct")} className="btn btn-md btn-outline-light createbutton">
          CREATE NEW
        </button>

        <table class="table  table-striped table-hover text-center m-2  ">
          <thead className="table-dark ">
            <tr>
              <th>S.NO.</th>
              <th>Product</th>
              <th>Name</th>
              <th>Price (Rs)    </th>
              <th>Qty(Kg)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ProductDetails.map((Product,index) => {
              return (
               <>
                <tr key={index+1} >
                  <td>{index+1  } </td>
                  <td>
                    
                    <img
                      src={Product.image}
                      title={Product.name}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>{Product.name}</td>
                  <td>{Product.price}</td>
                  <td>{Product.quantity}</td>

                  <td>

                    <button  onClick={() => dataUpate(Product)} className="btn btn-md btn-outline-light updatebotton m-2 ">Update </button>
                 
                    <button  onClick={()=>DeleteProduct(Product._id)} className="btn btn-md btn-outline-light deletebutton m-2 " > Delete </button>
                  </td>
                </tr>
               </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsDetails;

import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const { id } = props;
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => console.log(res));

            navigate("/"+id);
    }
return(
    <div>
        <h1>Update Product</h1>
    {loaded && (
       
        <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDesc={product.desc} />
        
    )}
     <DeleteButton personId={product._id} successCallback={() => navigate("/")} />
    </div>
    );
    
    }
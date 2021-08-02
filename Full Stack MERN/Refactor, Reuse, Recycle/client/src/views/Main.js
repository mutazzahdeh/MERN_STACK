import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res =>{
                setProduct(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    const createProduct = product1 => {
        axios.post('http://localhost:8000/api/product', product1)
            .then(res=>{
                
                setProduct([...product, res.data]);
            })
    }
    return (
        <div>
           <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice={0} initialDesc="" />
           <hr/>
           {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}
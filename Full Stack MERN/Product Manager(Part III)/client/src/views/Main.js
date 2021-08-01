import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main=() => {
    const [proudct, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])
    const showall=()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    }
    const removeFromDom = productId => {
        setProduct(proudct.filter(product => product._id != productId));
    }
    return (
        <div>
            
           < ProductForm showall={showall}/>
           <ProductList product={proudct} removeFromDom={removeFromDom} />

        </div>
    )
}
export default Main;

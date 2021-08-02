import React from 'react'
import axios from 'axios';
import DeleteButton from './DeleteButton';

import { Link } from '@reach/router';


const ProductList=(props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/people/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    
    
    return (
        <div>
            {props.product.map((product, idx)=>{
                

                return (<>
                <Link to = {"/"+product._id}>{product.title}</Link> |
                <DeleteButton productId={product._id} successCallback={()=>deleteProduct(product._id)}/>
                <br></br>
                </>
                )
                
            })}
        </div>
    )
}
export default ProductList;
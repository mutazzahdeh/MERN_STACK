import React from 'react'
import axios from 'axios';

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
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                <br></br>
                </>
                )
                
            })}
        </div>
    )
}
export default ProductList;
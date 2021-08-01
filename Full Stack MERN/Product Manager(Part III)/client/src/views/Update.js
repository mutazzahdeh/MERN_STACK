import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            desc
        })
            .then(res => console.log(res));
            navigate('/'+id)
            
    }
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="Number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Desc</label><br />
                    <input type="text" 
                    name="price"
                    value={desc} 
                    onChange={(e) => { setDesc(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
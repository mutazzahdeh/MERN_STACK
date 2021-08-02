import React from 'react'
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const { productId, successCallback } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/people/' + productId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}
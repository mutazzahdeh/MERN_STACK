import react, { useState } from 'react';

const MyComponent = props => {
    const onClickHandler = (e, value) => {
        props.value(value);
    }
 
    return props.movies.map( (item, index) => {
        return <button onClick={ (e) => onClickHandler(e, item) }>Tab{ index+1 }</button>
    });
   


}
export default MyComponent;
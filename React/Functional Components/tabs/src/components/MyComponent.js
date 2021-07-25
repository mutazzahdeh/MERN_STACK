import react, { useState } from 'react';

const MyComponent = props => {
 
    const onClickHandler = (e, value,index) => {
        for(var i=0; i<props.movies.length; i++){
            document.getElementById(i+1).style.background='lightgray';
            document.getElementById(i+1).style.color='black';
        }
        props.value(value);
     
        e.target.style.background='black';
        e.target.style.color='white';
 
     
    
           
    }
 
    return props.movies.map( (item, index) => {
        return <button id={index+1} onClick={ (e) => onClickHandler(e, item,index) }>Tab{ index+1 }</button>
    });
   


}
export default MyComponent;
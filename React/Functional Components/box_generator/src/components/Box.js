import react, { useState } from 'react';

const Box = (props) => {
    return (
        <>
             <div  style={{display:'flex'}}>
            {
                props.boxa.map( (value, i) => 
                <>
                
                <div key={i} style={{backgroundColor:value.color, width:value.width, height:value.hieght,margin:"10px"}}> 
                
                </div>
                </>
                )
            }

           
        </div>
        </>
    );
};
    
export default Box;
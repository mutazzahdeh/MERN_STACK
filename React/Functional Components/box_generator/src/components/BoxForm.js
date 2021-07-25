import react, { useState } from 'react';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    
    const boxsubme = (e) => {
        e.preventDefault();
       
      
        props.proparity(color,height,width)
     
      

    };
    return (
        <form onSubmit={ boxsubme }>
            
            <div>
                <label>color: </label> 
                <input type="text" onChange={ (e) => setColor(e.target.value) } />
            </div>
            <div>
                <label>width: </label> 
                <input type="text" onChange={ (e) => setWidth(e.target.value) } />
            </div>
            <div>
                <label>height: </label> 
                <input type="text" onChange={ (e) => setHeight(e.target.value) } />
            </div>
            <input type="submit" value="add" />
        </form>
    );
};
    
export default BoxForm;
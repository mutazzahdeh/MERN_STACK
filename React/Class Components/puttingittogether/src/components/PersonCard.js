import { Component } from "react"

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state={age:this.props.age}}
    render(){
return (
<div>
    <h1>{this.props.name}</h1>
    <p>Age:{ this.state.age}</p>
    <p>Hair Color : {this.props.color}</p>
    <button onClick={ this.riseage }>Birth day for {this.props.name}</button>
</div>
);
    }
    riseage = () => {
        this.setState({age:this.state.age+1});
    }
}
export default PersonCard;
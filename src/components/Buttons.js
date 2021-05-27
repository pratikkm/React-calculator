import React, {Component} from 'react';


class Buttons extends Component {
    // constructor(props){
    //     super(props);

    // }
    render(){
        
        return(
        
            <div className= {`column-${this.props.cols}`}>
                <button className="calc-buttons" onClick = {() => this.props.action(this.props.Symbol)}>{this.props.Symbol}</button>
            </div>    
        );
    }
}
export default Buttons;
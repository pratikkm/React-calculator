import React, {Component} from 'react';
import Buttons from './components/Buttons'
import './css/style.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            current: '',
            previous: [],
            isNextReset : false
        }
    }
    reset = () => {
        this.setState({
            current: '0',
            previous: [],
            isNextReset: false
        })
    }
    addToCurrent = (Symbol) => {
        console.log("symbol",Symbol)
        if(["/","+","-","*"].indexOf(Symbol) > -1){
            let {previous} = this.state;
            previous.push(this.state.current + Symbol);
            this.setState({previous: previous, isNextReset: true});
        } else {
            if((this.state.current === "0" && Symbol !== ".") || this.state.isNextReset) {
                this.setState({current: Symbol, isNextReset: false})
            }else {
                this.setState({
                    current: this.state.current + Symbol
                });
            }
            
        }
        
    }
    calculate = () => {
        let {current,previous,isNextReset} = this.state;
        if(previous.length > 0) {
            current = eval(String(previous[previous.length-1] + current));
            this.setState({current, previous:[],isNextReset: true})
        }
    }
    render(){
        const buttons = [
            {Symbol: 'C',cols: 3, action:this.reset},
            {Symbol: '/',cols: 1, action:this.addToCurrent},
            {Symbol: '7',cols: 1, action:this.addToCurrent},
            {Symbol: '8',cols: 1, action:this.addToCurrent},
            {Symbol: '9',cols: 1, action:this.addToCurrent},
            {Symbol: '*',cols: 1, action:this.addToCurrent},
            {Symbol: '4',cols: 1, action:this.addToCurrent},
            {Symbol: '5',cols: 1, action: this.addToCurrent},
            {Symbol: '6',cols: 1, action:this.addToCurrent},
            {Symbol: '-',cols: 1, action:this.addToCurrent},
            {Symbol: '1',cols: 1, action:this.addToCurrent},
            {Symbol: '2',cols: 1, action:this.addToCurrent},
            {Symbol: '3',cols: 1, action:this.addToCurrent},
            {Symbol: '+',cols: 1, action:this.addToCurrent},
            {Symbol: '0',cols: 2, action:this.addToCurrent},
            {Symbol: '.',cols: 1, action: this.addToCurrent},
            {Symbol: '=',cols: 1, action: this.calculate}
        ];
        return (
            <div>
                {this.state.previous.length > 0?
                <div className = "floaty-last">{this.state.previous[this.state.previous.length - 1]}</div>
                : null}
                <input className= "result" type= "text" value={this.state.current} ></input>

                {buttons.map((btn,i)=>{
                    return <Buttons key ={i} Symbol= {btn.Symbol} cols={btn.cols} action={(Symbol) => btn.action(Symbol) } />
                })}

            </div>
        )
    }
}
export default App;
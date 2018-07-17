import React,{Component} from "react";
import MDReactComponent from 'markdown-react-js';
import {store} from "../../../store";
let markdownString = "";

class Previewer extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        store.subscribe(()=>{
            this.setState(store.getState());
        })
    }
    render(){
        return (
            <div className="mono-markdown-previewer">
                <MDReactComponent text={this.state.markdownString} />
            </div>
        )
    }
}

export default Previewer;
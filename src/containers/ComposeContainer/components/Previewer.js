import React,{Component} from "react";
import MDReactComponent from 'markdown-react-js';
import {store} from "../../../store";
const TAGS = {
    html: 'div', // root node, replaced by default
    strong: 'b',
    em: 'i'
}
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
            <div className="mono-markdown-previewer markdown-body">
                <MDReactComponent text={this.state.markdownString} tags={TAGS}/>
            </div>
        )
    }
}

export default Previewer;
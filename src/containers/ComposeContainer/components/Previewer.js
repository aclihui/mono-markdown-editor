import React,{Component} from "react";
import MDReactComponent from 'markdown-react-js';
const input = '# This is a header\n\nAnd this is a paragraph'

class Previewer extends Component{
    render(){
        return (
            <div className="mono-markdown-previewer">
                <MDReactComponent text={input} />
            </div>
        )
    }
}

export default Previewer;
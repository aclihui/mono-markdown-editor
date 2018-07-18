import React, { Component } from 'react';
import MarkdownEditor from "./components/MarkdownEditor";
import Previewer from "./components/Previewer";
import ToolBar from "./components/ToolBar";

class ComposeContainer extends Component{
    render(){
        return (
            <div className="mono">
                <ToolBar/>
                <MarkdownEditor/>
                <Previewer/>
            </div>
        )
    }
}

export default ComposeContainer;
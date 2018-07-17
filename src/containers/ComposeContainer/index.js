import React, { Component } from 'react';
import MarkdownEditor from "./components/MarkdownEditor";
import Previewer from "./components/Previewer";

class ComposeContainer extends Component{
    render(){
        return (
            <div>
                <MarkdownEditor/>
                <Previewer/>
            </div>
        )
    }
}

export default ComposeContainer;
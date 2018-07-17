import React, { Component } from 'react';
import {store} from "../../../store";
import {updateMarkdownString} from "../actions";
class MarkdownEditor extends Component{
    constructor(props){
        super(props);
    }
    handleInputChange(event){
        store.dispatch(updateMarkdownString(event.target.value));
    }
    render(){
        return (
            <div className="mono-markdown-editor">
                <textarea onChange={event => {this.handleInputChange(event)}}></textarea>
            </div>
        )
    }
}

export default MarkdownEditor;
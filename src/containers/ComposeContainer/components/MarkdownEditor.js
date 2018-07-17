import React, { Component } from 'react';
import {store} from "../../../store";
import {updateMarkdownString} from "../actions";
import AV from "leancloud-storage";
import _ from "lodash";

class MarkdownEditor extends Component{
    constructor(props){
        super(props);
        this.state={
            valueOfEditor:""
        }
    }
    handleInputChange(event){
        this.setState({valueOfEditor:event.target.value});
        store.dispatch(updateMarkdownString(event.target.value));

    }
    handlePaste(event){
        let pasteItem = _.head(event.clipboardData.items);
        if(pasteItem.kind==="file"){
            let sourceFile = pasteItem.getAsFile();
            let file = new AV.File("名字随便取.jpg",sourceFile);//名字随便取
            file.save().then(file=>{
                const templateMarkdownImageText = `![image](${file.attributes.url})`
                let currentMarkdownString = store.getState().markdownString + templateMarkdownImageText;
                store.dispatch(updateMarkdownString(currentMarkdownString));
                this.setState({valueOfEditor:currentMarkdownString});
            },error=>{
                console.log(error)
            })
        }
    }
    render(){
        return (
            <div className="mono-markdown-editor">
                <textarea
                    placeholder="在这里写Markdown，支持粘贴剪贴板中的图片"
                    onChange={event => {this.handleInputChange(event)}}
                    onPaste={event => {this.handlePaste(event)}}
                    value={this.state.valueOfEditor}></textarea>
            </div>
        )
    }
}

export default MarkdownEditor;
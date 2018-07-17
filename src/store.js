import {createStore} from "redux";
export let store = createStore((state,action)=>{
    switch (action.type){
        case "UPDATE_MARKDOWN_STRING":
            state.markdownString = action.value;
            break;
        default:
            return {markdownString:""};
    }
    return state;
});
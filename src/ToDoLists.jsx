import React from "react";

const ToDoLists = (props) => {
    return (
        <>
        <li>
       
            <button className="eachItem" onClick={()=>{
                    props.onSelect(props.id)
                }}>Delete</button>&nbsp; &nbsp;
                {props.text} 
            
        </li>
        
        
        </>
        
    )

}

export default ToDoLists;
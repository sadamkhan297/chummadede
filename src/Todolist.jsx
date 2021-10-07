import React from 'react'

const Todolist = (props) => {
    return (
        <>
        <button
            onClick={()=> props.onClick(props.id)}>-</button>  
       <li>{props.move}</li>
        </>
    )
}

export default Todolist

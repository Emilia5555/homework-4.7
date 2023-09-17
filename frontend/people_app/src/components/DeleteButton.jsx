import React from 'react'

const DeleteButton = ({id, deletePeople}) => {
    
    function handleDelete(e){
        
        deletePeople(id)
    }


    return (
    <>
        <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default DeleteButton
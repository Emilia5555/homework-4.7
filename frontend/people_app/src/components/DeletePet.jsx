import React from 'react'

const DeletePet = ({id, deletePet}) => {
    

    function handleDelete(e){
        
        deletePet(id)
    }

    return (
    <>
        <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default DeletePet
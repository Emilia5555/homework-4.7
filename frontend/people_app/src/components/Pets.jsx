import React from 'react'
import DeletePet from './DeletePet'

const Pets = ({pets, deletePet}) => {

    return (
    <>
    {pets.map(pet =>{
        return (
            <div key={pet.id}>
                <h4>Name: {pet.pet_name}</h4>
                <h5>Type: {pet.type}</h5>

                <DeletePet id={pet.id} deletePet={deletePet}/>

                <hr />
            </div>
        )
    })}
    
    </>
  )
}

export default Pets
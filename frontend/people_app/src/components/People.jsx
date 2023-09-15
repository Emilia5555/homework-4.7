import React from 'react'
import DeleteButton from './DeleteButton'

const People = ({people, deletePeople}) => {

    return (
    <>
    
    {people.map(person =>{
        return (
            <div key={person.id}>
                <h4>Name: {person.owner_name}</h4>
                <h5>Location: {person.location}</h5>
                <p>The person's age is {person.age}, their ID is {person.id}, and their pet's ID is {person.pet_id}</p>

                <DeleteButton id={person.id} deletePeople={deletePeople}/>

                <hr />
            </div>
        )
    })}
    
    </>
  )
}

export default People
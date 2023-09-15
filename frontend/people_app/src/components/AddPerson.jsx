import React, {useState} from 'react'

const AddPerson = ({addPeople}) => {

    const [person, setPerson] = useState({
      owner_name: "",
      age: "",
      location: "",
      pet_id: ""
    })

    function handleName(e){

        setPerson(previousPerson =>{
            return {...previousPerson, owner_name: e.target.value}
        })

    }

    function handleOnSubmit(e){

        e.preventDefault()
        addPeople(person)
        // console.log(person)

        setPerson({
            owner_name: "",
            age: "",
            location: "",
            pet_id: ""
          })
    }
  
    return (
    
    <>

    <hr />
    <h2>This is the component to Add a Person</h2>
    
    <form onSubmit={handleOnSubmit}>

        <input type="text"
        placeholder="Name"
        value={person.owner_name}
        onChange={handleName}
        />

        <input type="number"
        placeholder="Age"
        value={person.age}
        onChange={e => {
            setPerson(previousPerson =>{
                return {...previousPerson, age: e.target.value}
            })
        }}
        />

        <input type="text"
        placeholder="Location"
        value={person.location}
        onChange={e => {
            setPerson(previousPerson =>{
                return {...previousPerson, location: e.target.value}
            })
        }}
        />

        <input type="number"
        placeholder="Pet ID"
        value={person.pet_id}
        onChange={e => {
            setPerson(previousPerson =>{
                return {...previousPerson, pet_id: e.target.value}
            })
        }}
        />

    <button>Add Person</button>

    </form>

    <hr />
    
    </>


  )
}

export default AddPerson
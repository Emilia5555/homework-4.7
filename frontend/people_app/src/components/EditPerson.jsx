import React,{useState} from 'react'

const EditPerson = ({editPeople}) => {

    const [person, setPerson] = useState({
        id:"",
        owner_name: "",
        age: "",
        location: "",
        pet_id: ""
      })

      function handleSubmit(e){

        e.preventDefault()

        editPeople(person.id, person)

        setPerson({
            id:"",
            owner_name: "",
            age: "",
            location: "",
            pet_id: ""
          })
      }

  return (
    <>
    <hr />
    <h2>This is the component to Edit a Person</h2>
    
    <form onSubmit={handleSubmit}>

    <input type="number"
        placeholder="ID"
        value={person.id}
        onChange={e => {
            setPerson(previousPerson =>{
                return {...previousPerson, id: e.target.value}
            })
        }}
        />

        <input type="text"
        placeholder="Name"
        value={person.owner_name}
        onChange={e => {
            setPerson(previousPerson =>{
                return {...previousPerson, owner_name: e.target.value}
            })
        }}
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

    <button>Edit Person</button>

    </form>

    <hr />
    
    </>
  )
}

export default EditPerson
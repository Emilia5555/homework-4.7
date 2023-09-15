import React, {useState, useEffect} from 'react'
import People from './components/People';
import apiConn from "./api/connect"
import AddPerson from './components/AddPerson';
import EditPerson from './components/EditPerson';

const App = () => {

  // const people = [
  //   {
  //     owner_name: "Alice",
  //     age: 28,
  //     location: "New York",
  //     pet_id: 5
  //   },
  //   {
  //     owner_name: "Bob",
  //     age: 34,
  //     location: "San Francisco",
  //     pet_id: 3
  //   },
  //   {
  //     owner_name: "Charlie",
  //     age: 45,
  //     location: "Los Angeles",
  //     pet_id: 1
  //   },
  //   {
  //     owner_name: "David",
  //     age: 29,
  //     location: "Chicago",
  //     pet_id: 2
  //   },
  //   {
  //     owner_name: "Eva",
  //     age: 50,
  //     location: "Miami",
  //     pet_id: 4
  //   }
  // ];

  const [people, setPeople] = useState([]) 

  useEffect( ()=>{

    getPeople()

  }, [])


  function getPeople(){

    apiConn.get('/people')
    .then(response =>{

      setPeople(response.data)

    })
    .catch( error =>{
      console.log(error)
    })

  }

  function addPeople(info){

    apiConn.post("/people", info)
    .then(response =>{
      
      console.log("We have successfully added a person to the database.")
      
      getPeople()

    })
    .catch( error =>{
      console.log(error)
    })
  }

  function deletePeople(id){

    apiConn.delete(`/people/${id}`)
    .then(response =>{

      console.log(response)
      
      getPeople()

    })

  }

  function editPeople(id, info){

    console.log(`The id is ${id}`)

    apiConn.put(`/people/${id}`, info)
    .then(response =>{

      getPeople()
    
    })
    .catch(error =>{

      console.log(error)
    })


  }

  return (
    <>
    
    <h1>Hey, welcome to my People's App</h1>
    <AddPerson addPeople={addPeople}/>
    <EditPerson editPeople={editPeople}/>
    <People people={people} deletePeople={deletePeople}/>
    
    </>
  )
}

export default App
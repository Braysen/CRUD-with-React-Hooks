import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import UserTable from './Componentes/UserTable';
import AddUserForm from './Componentes/AddUserForm';
import EditUserForm from './Componentes/EditUserForm';

function App() {

  const userData=[
    {id:uuidv4(), name:"Tania", username:"floppydiskjet"},
    {id:uuidv4(), name:"Craig", username:"siniconeidolon"},
    {id:uuidv4(), name:"Ben", username:"benisphere"}
  ]

  /* State */
  const[users,setUsers]=useState(userData);

  /* Agregar Usuarios */
  const addUser = (user) =>{
    //Generamos un nuevo id a travez de la libreria uuid
    user.id=uuidv4();
    setUsers([
      ...users,
      user
    ])
  }

   /* Eliminar Usuarios */
   const deleteUser = (id) =>{
     const arrayFiltrado= users.filter(user => user.id !== id);
     setUsers(arrayFiltrado);
   }

   /* Editar Usuarios */
   const[editing,setEditing]=useState(false);

   const[currentUSer,setCurrentUser]=useState({
     id:null, name:'', username:''
   });

   const editRow = (user) => {
     setEditing(true);
     setCurrentUser({
       id: user.id, name: user.name, username: user.username
     })
   }

   const updateUser = (id,updateUser) => {
     setEditing(false);
     setUsers(users.map(user => (user.id === id ? updateUser:user)))
   }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ?(
              <div>
                <h2>Edit User</h2>
                <EditUserForm currentUSer={currentUSer} updateUser={updateUser}></EditUserForm>
              </div>
            ):(
              <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser}></AddUserForm>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
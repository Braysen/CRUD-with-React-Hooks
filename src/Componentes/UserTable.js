import React from 'react';

const UserTable =(props)=>{
    console.log(props.users);
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className="button button-primary" onClick={() => {props.editRow(user)}}>Edit</button>
                                <button className="button button-warning" onClick={() => {props.deleteUser(user.id)}}>Delete</button>
                            </td>
                        </tr>
                    )):(
                        <tr>
                            <td  colSpan={3}>No Users</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default UserTable;
import React from 'react';
const UserTable = props => (
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Fist Name</th>
                <th>Last Name</th>
                <th>Suffix</th>
                <th>Avatar</th>
                <th>Email</th>
                <th>UserName</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.suffix}</td>
                    <td><img src={user.avatar}/></td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>
                        <button className="button muted-button" onClick={() => {props.editRow(user)}}>Edit</button>
                        <button className="button muted-button" onClick={() => {props.deleteUser(user.id)}}>Delete</button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={8}>No users</td>
            </tr>
        )}
        </tbody>
    </table>
);
export default UserTable;
import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const UserTable = props => {
    let faker_factory = require('../../modules/faker_factory');
    const usersData = faker_factory.generatorUsers(6);
    const [users, setUsers] = useState(usersData);
    // add user
    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };
    // delete user
    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id));
    };
    // edit user
    const initialFormState = {
        id: null,
        name: '',
        username: '',
    };
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const editRow = user => {
        setCurrentUser({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            suffix: user.suffix,
            avatar: user.avatar,
            email: user.email,
            username: user.username,
        });

    };
    const updateUser = (id, updatedUser) => {
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    };
    return (
        <div>
            <h2>View user</h2>
            <h6><Link className='button muted-button'to={"/users/add"}>Add user</Link></h6>
            <div className="contain-table">
                <table className='striped-table'>
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
                    {users.length > 0 ? (
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.suffix}</td>
                                <td><img src={user.avatar}/></td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    <Link className='button muted-button'to={"/users/edit/"+user.id}>Edit</Link> <button className="button muted-button" onClick={() => {deleteUser(user.id)}}>Delete</button>
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
            </div>
        </div>
    );
};
export default UserTable;
import React, {useState} from 'react';
import './App.css';
import UserTable from "../usertable/UserTable";
import AddUserForm2 from "../adduserform/AddUserForm2";
import EditUserForm from '../edituserform/EditUserForm';

const App = () => {
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
    const [editing, setEditing] = useState(false);
    const initialFormState = {
        id: null,
        name: '',
        username: '',
    };
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const editRow = user => {
        setEditing(true)

        setCurrentUser({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            suffix: user.suffix,
            avatar: user.avatar,
            email: user.email,
            username: user.username,
        })
    };
    const updateUser = (id, updatedUser) => {
        setEditing(false);

        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    };

    return (
        <div className='container'>
            <h1>CRUD App with Hooks</h1>
            <div className='flex-row'>
                <div className="flex-small">
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                            <AddUserForm2 editing={editing}
                                          setEditing={setEditing}
                                          currentUser={currentUser}
                                          updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm2 addUser={addUser} />
                        </div>
                    )}
                    <div className='flex-small'>
                        <h2>View user</h2>
                        <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

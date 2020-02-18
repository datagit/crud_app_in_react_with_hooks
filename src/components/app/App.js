import React, {useState} from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import UserTable from "../usertable/UserTable";
import AddUserForm from "../adduserform/AddUserForm";


const App = () => {
    var faker = require('faker');
    const usersData = [
        { id: 1, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 2, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 3, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 4, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 5, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 6, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 7, name: faker.name.findName(), username: faker.internet.userName() },
    ];
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

        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    };
    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    }
};
  return (
    <div className='container'>
        <h1>CRUD App with Hooks</h1>
        <div className='flex-row'>
            <div className="flex-large">
                {editing ? (
                    <div>
                        <h2>Edit user</h2>
                        <EditUserForm
                            editing={editing}
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                        />
                    </div>
                ) : (
                    <div>
                        <h2>Add user</h2>
                        <AddUserForm addUser={addUser} />
                    </div>
                )}
          <div className='flex-large'>
            <h2>View user</h2>
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
          </div>
        </div>
    </div>
  );
}

export default App;

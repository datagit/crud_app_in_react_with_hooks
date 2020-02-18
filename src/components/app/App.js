import React, {useState} from 'react';
import './App.css';
import UserTable from "../usertable/UserTable";
import AddUserForm from "../adduserform/AddUserForm";
import EditUserForm from '../edituserform/EditUserForm';


const App = () => {
    // ---------------------------
    var faker = require('faker');
    // random generator
    const generator = (schema, min = 1, max) => {
        max = max || min
        return Array.from({ length: max }).map(() => Object.keys(schema).reduce((entity, key) => {
            entity[key] = faker.fake(schema[key])
            return entity
        }, {}))
    };

    // your schema
    const clientsSchema = {
        id: '{{random.number}}',
        name: '{{name.findName}}',
        username: '{{internet.userName}}'
    };

    // generate random clients between 5 and 20 units, based on client schema defined above
    const data = generator(clientsSchema, 1, 5);
    // ---------------------------
    const usersData = data;
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
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
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

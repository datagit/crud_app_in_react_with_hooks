import React, {useState} from 'react';
const AddUserForm = props => {
    const initialFormState = {
        id: null,
        name: '',
        username: '',
    };
    const [user, setUser] = useState(initialFormState);
    const handelInputChange = event => {
        const {name, value} = event.target;
        // json object: set dynamic key: value
        setUser({ ...user, [name]: value })
    };
    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if (!(user.name) || !(user.username)) return;
                // call to add user into list users
                props.addUser(user);
                // reset form
                setUser(initialFormState);
            }
        }>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handelInputChange}/>
            <label>UserName</label>
            <input type="text" name="username" value={user.username} onChange={handelInputChange}/>
            <button className='muted-button'>Add new user</button>
        </form>
    );
};
export default AddUserForm;
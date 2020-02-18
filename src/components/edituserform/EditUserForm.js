import React, {useState} from 'react';

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);
    const handleInputChange = event => {
      const {name, value} = event.target;

        // json object: set dynamic key: value
        setUser({ ...user, [name]: value });
    };

    return (
        <form onSubmit={ event => {
            event.preventDefault();
            // call to update user into list users
            props.updateUser(user.id, user);
        }}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    );
};

export default EditUserForm;
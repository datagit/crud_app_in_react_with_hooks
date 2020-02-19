import React, {useState} from 'react';
import { useForm } from "react-hook-form";

const AddUserForm2 = props => {
    const defaultValues = {
        id: null,
        first_name: '',
        last_name: '',
        suffix: '',
        avatar: '',
        email: '',
        username: '',
    };
    const { register, handleSubmit, watch, errors, reset } = useForm();
    // debug field:
    console.log(watch('username')) // watch input value by passing the name of it
    console.log(watch('errors')) // watch input value by passing the name of it

    const onSubmit = values => {
        console.log(values);
        // call to add user into list users
        props.addUser(values);
        // reset form
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>validation with React Hook Form</h3>
            <label>First Name</label>
            <input type="text" name="first_name"
                   placeholder="abc"
                   className={errors.first_name && 'has-error'}
                   ref={register({ required: true })}
            />
            {errors.first_name && <label className='error'>This field is required</label>}
            <label>UserName</label>
            <input type="text" name="username"
                   placeholder="bluebill1049"
                   className={errors.username && 'has-error'}
                   ref={register({ required: true,
                       maxLength: 20,
                       minLength: 5,
                       pattern: /^[A-Za-z0-9]+$/i
                   })}
            />
            {errors.username && <label className='error'>invalid username (min=5,max=20)</label>}
            <label>Email</label>
            <input name="email"
                   placeholder="bluebill1049@hotmail.com"
                   type="text"
                   className={errors.email && 'has-error'}
                   ref={register({
                       required: true,
                       pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                   })}
            />
            {errors.email && <label className='error'>invalid email</label>}
            <button className='muted-button'>Add new user</button>
            <button type="button" className='muted-button' onClick={() => reset({ defaultValues })}>Reset</button>
        </form>
    );
};
export default AddUserForm2;
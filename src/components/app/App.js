import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import './App.css';
import UserTable from "../usertable/UserTable";
import AddUserForm2 from "../adduserform/AddUserForm2";

export default function App() {
    return (
        <Router>
            <div className='container'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/123">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>

                    <Route path="/users/edit/:user_id">
                        <EditUser />
                    </Route>
                    <Route path="/users/add">
                        <AddUser />
                    </Route>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path="/about/:param">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    let { param } = useParams();
    return <h2>About {param}</h2>;
}

function EditUser() {
    let { user_id } = useParams();
    return <h2>EditUser {user_id}</h2>;
}

function AddUser() {
    return <AddUserForm2 />;
}

function Users() {
    return <UserTable/>;
}


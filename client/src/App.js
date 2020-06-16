import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Users from "./components/Users";
import axios from "axios";
import "./App.css";

function App() {

    //  Users array
    const [users, setUsers] = useState([]);

    //  Get users
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users")
            .then(res => {
                setUsers(res.data);
            })
    }, []);

    //  Delete user
    const userDelete = (id) => {
        axios
            .delete(`http://localhost:8000/api/users/${id}`)
            .then(res => {
                setUsers(
                    users.filter(user => user.id !== id)
                );
            });
    }

    return (
        <div className="App">
            <header>
                <Typography variant="h2" component="h1">
                    USERS: {users.length}
                </Typography>
            </header>
            <section>
                <Users users={users} userDelete={userDelete} />
            </section>
        </div>
    );
}

export default App;

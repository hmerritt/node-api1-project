import React from "react";
import User from "./User";

function Users({ users, userDelete }) {
    return (
        <div className="Users">
            {
                users.map((user, key) => {
                    return (<User user={user} userDelete={userDelete} key={key} />)
                })
            }
        </div>
    );
}

export default Users;

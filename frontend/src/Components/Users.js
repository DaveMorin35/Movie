import {useCallback, useEffect, useState} from "react";

export function Users({token}) {
    const [users, setUsers] = useState(null);

    const loadUsers = useCallback(() => {
        fetch("http://localhost:8080/user", {
            method: "GET",

        })
            .then((response) => {
                return response.json();
            })
            .then((users) => setUsers(users))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [token]);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);
console.log(users)
    return (

        <>
            {users === null || users === undefined ? <>
                <p>No users</p>
                <button type="button" onClick={loadUsers}>Reload</button>
            </> : <>
                <button type="button" onClick={loadUsers}>Reload</button>
                <table>
                    <thead>
                    <tr>Username</tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => <tr key={index}>
                        <td>{user.username}</td>
                    </tr>)}
                    </tbody>
                </table>
            </>
            }
        </>
    )

}
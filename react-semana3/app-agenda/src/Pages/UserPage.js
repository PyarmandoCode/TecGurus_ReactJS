import React, { useEffect, useState } from "react";
import { usersApi } from "./api/UserApi";

//Realizar una peticion mediante una promesas
export const UserPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();

    }, [])

    // const getUsers = () => {
    //     usersApi.get('https://reqres.in/api/users')
    //         .then(resp => {
    //             console.log(resp.data.data);
    //         });
    // }

    const getUsers = async () => {
        //Await retornar una promesa
        const resp = await usersApi.get('https://reqres.in/api/users');
        setUsers(resp.data.data)
    }
    return (
        <div className="mt-5">
            <h1>Listado de Usuarios</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.email}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}{user.last_name}</td>
                                <td>
                                    <img src={user.avatar} className="img-thumbail" style={{ width: 70 }} alt="" />
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from '../../App'
import "../UI/UserF.css"

const UserF = () => {
    const [userProfile, setProfile] = useState([])

    const { state, dispatch } = useContext(UserContext)
    const history = useNavigate();

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get("http://localhost:4000/api/users", {
                headers: {
                    "Authorization": "Bearer" + localStorage.getItem("jwt")
                }
            });
            console.log(res);
            setProfile(res.data);
        };
        getUsers();
    }, []);

    return (
        <section>
            {userProfile.map((profile) => (
                <div key={profile._id} className="card">
                    <div className="p-profile">
                        <img src="./images/usuario.png" alt="perfil" />
                    </div>

                    <div className="name">
                        <h2>ALUMNO</h2>
                        <p>{state ? state.nombre : "loading"}</p>
                        <p>{state ? state.apellido : "loading"}</p>
                        <h3>{state ? state.correo : "loading"}</h3>
                    </div>

                    <div className="more">
                        <button onClick={() => history(`/EditarPerfil/${profile._id}`)}>Editar Perfil</button>
                    </div>

                    <a href="/HomePageInstS" className="alinear-derecha flex">
                        <input className="boton w-sm-100" type="submit" value="Regresar" />
                    </a>
                </div>
            ))}
            <div className="logo_uaq">
                <img src="./images/uaq.png" alt="logo" />
            </div>
        </section>
    )
}

export default UserF

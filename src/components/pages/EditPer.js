import React, { useEffect } from 'react'

export function EditPer() {
    useEffect(() => {
        fetch('http://localhost:4000/api/users', {
            headers: {
                "Authorization": "Bearer" + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    }, [])
    return (
        <section>
            <div className="card">

                <div className="p-profile">
                    <img src="img/usuario.png" alt="perfil" />
                </div>

                <div className="name">
                    <div className="text">
                        <label>Nombre(s)</label>
                        <input className="input-text" type="text" placeholder="Tu Nombre" />
                    </div>
                    <div className="text">
                        <label>Apellido(s)</label>
                        <input className="input-text" type="text" placeholder="Tu Apellido" />
                    </div>
                    <div className="text">
                        <label>Correo electrónico</label>
                        <input className="input-text" type="email" placeholder="Tu Correo" />
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-btn">
                                <span className="fileUpload btn btn-success">
                                    <span className="upl" id="upload">Subir foto de perfil</span>
                                    <input type="file" name="fileUrl" className="upload up" id="up" accept='.pdf' />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="more">
                    <button>Actualizar</button>
                </div>
                <div className="regresar">
                    <button>Regresar</button>
                </div>
            </div>
        </section>
    )
}

export default EditPer

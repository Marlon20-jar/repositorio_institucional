//import { data } from 'jquery';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import NavigationHome from '../NavigationHome';
import "../UI/CreateDocu.css";


const UpdateD = () => {

    const [fileUrl, setFileUrl] = useState("");
    const [Titulo, setTitulo] = useState("");
    const [Autor, setAutor] = useState("");
    const [ISBN, setISBN] = useState("");
    const [Genero, setGenero] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [ISSN, setISSN] = useState("");
    const [img, setimg] = useState("");
    const [document, setDocument] = useState({
        img: "",
        Titulo: "",
        Autor: "",
        createdAt: "",
        descripcion: "",
        Genero: "",
        _id: "",
    });

    const params = useParams();

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:4000/api/documentos/${params.id}`)
            setDocument(res.data);
        })();
    }, [params.id]);


    const postDocument = () => {

        const dataF = new FormData()
        dataF.append("myFile", fileUrl)
        fetch(`http://localhost:4000/api/documentos/${params.id}`, {
            method: "PUT",
            body: dataF,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + localStorage.getItem("jwt"),
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
              },
        })
            .then((res) => res.json())
            .then((dataF) => {
                console.log(dataF);
            })
            .catch(error=>{
                console.log(error);
            })
        fetch(`http://localhost:4000/api/documentos/${params.id}`, {
            method: "PUT",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + localStorage.getItem("jwt"),
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            body: JSON.stringify({
                Titulo,
                Autor,
                ISBN,
                Genero,
                descripcion,
                ISSN,
                img,
            }),
        }).then((res) => res.json())
            .then((data) => {
                alert("Registro exitoso");
                console.log(data, "userRegister");
                window.location.href = "/library"
            });
    }

    return (
        <>
            <section>
                <NavigationHome /><br></br>
                <form method="put" action="#" id="#" className="formulario" onSubmit={() => postDocument()}>
                    <fieldset>
                        <legend>Registrar Libro </legend>

                        <div className="campo">
                            <label>Titulo</label>
                            <input
                                name="Titulo"
                                type="text"
                                className="input-text"
                                placeholder={document.Titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Autor(s)</label>
                            <input name="Autor" type="text" className="input-text" placeholder={document.Autor}
                                onChange={(e) => setAutor(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Genero</label>
                            <select className="formulario__campo" name="Genero"
                                onChange={(e) => setGenero(e.target.value)}>
                                <option disabled="">Selecciona una opci??n</option>
                                <option value="Artes y Dise??o">Artes y Dise??o</option>
                                <option value="Ciencias">Ciencias</option>
                                <option value="Ciencias Pol??ticas y Sociales">Ciencias Pol??ticas y Sociales</option>
                                <option value="Contadur??a y Administraci??n">Contadur??a y Administraci??n</option>
                                <option value="Arquitectura">Arquitectura</option>
                                <option value="Derecho">Derecho</option>
                                <option value="Econom??a">Econom??a</option>
                                <option value="Filosof??a y Letras">Filosof??a y Letras</option>
                                <option value="Ingenier??a">Ingenier??a</option>
                                <option value="Medicina">Medicina</option>
                                <option value="Medicina Veterinaria y Zootecnia">Medicina Veterinaria y Zootecnia</option>
                                <option value="M??sica">M??sica</option>
                                <option value="Odontolog??a">Odontolog??a</option>
                                <option value="Psicolog??a">Psicolog??a</option>
                                <option value="Qu??mica">Qu??mica</option>
                                <option value="Inform??tica">Inform??tica</option>
                                <option value="Artes Cinematogr??ficas">Artes Cinematogr??ficas</option>
                                <option value="Enfermer??a y Obstetricia">Enfermer??a y Obstetricia</option>
                            </select>
                        </div>

                        <div className="campo">
                            <label>Descripci??n</label>
                            <textarea
                                name="descripcion"
                                type="text"
                                placeholder={document.descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}></textarea>
                        </div>

                        <div>
                            <label>Si su documento no es un libro o revista no escriba nada solo envie</label>
                        </div>

                        <div className="campo">
                            <label>Libro</label>
                            <input
                                type="text"
                                name="ISBN"
                                className="input-text"
                                placeholder={document.ISBN}
                                onChange={(e) => setISBN(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>o Revista</label>
                            <input
                                type="text"
                                name="ISSN"
                                className="input-text"
                                placeholder={document.ISSN}
                                onChange={(e) => setISSN(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Link de la imagen</label>
                            <input
                                type="text"
                                name="img"
                                className="input-text"
                                placeholder={document.img}
                                onChange={(e) => setimg(e.target.value)}
                            />
                        </div>


                        <div className="campo">
                            <label>Adjunta tu archivo</label>
                            <input
                                type="file"
                                name="fileUrl"
                                onChange={(e) => setFileUrl(e.target.files[0])}
                                className="form-control"
                                accept=".pdf" />
                        </div>


                        <div className="alinear-derecha flex">
                            <input className="boton w-sm-100" type="submit" value="ACTUALIZAR" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default UpdateD
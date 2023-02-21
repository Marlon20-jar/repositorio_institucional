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
                                <option disabled="">Selecciona una opción</option>
                                <option value="Artes y Diseño">Artes y Diseño</option>
                                <option value="Ciencias">Ciencias</option>
                                <option value="Ciencias Políticas y Sociales">Ciencias Políticas y Sociales</option>
                                <option value="Contaduría y Administración">Contaduría y Administración</option>
                                <option value="Arquitectura">Arquitectura</option>
                                <option value="Derecho">Derecho</option>
                                <option value="Economía">Economía</option>
                                <option value="Filosofía y Letras">Filosofía y Letras</option>
                                <option value="Ingeniería">Ingeniería</option>
                                <option value="Medicina">Medicina</option>
                                <option value="Medicina Veterinaria y Zootecnia">Medicina Veterinaria y Zootecnia</option>
                                <option value="Música">Música</option>
                                <option value="Odontología">Odontología</option>
                                <option value="Psicología">Psicología</option>
                                <option value="Química">Química</option>
                                <option value="Informática">Informática</option>
                                <option value="Artes Cinematográficas">Artes Cinematográficas</option>
                                <option value="Enfermería y Obstetricia">Enfermería y Obstetricia</option>
                            </select>
                        </div>

                        <div className="campo">
                            <label>Descripción</label>
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
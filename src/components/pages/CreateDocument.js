import React, { useState } from 'react'
import axios from 'axios';
import NavigationHome from '../NavigationHome'
import "../UI/CreateDocu.css"

export default function CreateDocument() {
  const [fileUrl, setFileUrl] = useState();
  const [Titulo, setTitulo] = useState("");
  const [Autor, setAutor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [Genero, setGenero] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ISSN, setISSN] = useState("");
  const [img, setimg] = useState("");


  const onInputChange = (e) => {
    setFileUrl(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("myFile", fileUrl);
    formData.append("Titulo", Titulo);
    formData.append("Autor", Autor);
    formData.append("ISBN", ISBN);
    formData.append("Genero", Genero);
    formData.append("descripcion", descripcion);
    formData.append("ISSN", ISSN);
    formData.append("img", img);


    const res = await axios.post('http://localhost:4000/api/documentos/', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer" + localStorage.getItem("jwt")
      },
    }).then((data) => {
      console.log(data, "DocumentRegister");
      window.location.href = "/HomePageInstS"
    });
    console.log(res);
  }

  return (
    <>
      <section>
        <NavigationHome /><br></br>
        <form method="post" action="#" id="#" className="formulario" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Registrar Libro </legend>

            <div className="campo">
              <label>Titulo</label>
              <input
                name="Titulo"
                type="text"
                className="input-text"
                placeholder=" Titulo(s)"
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>

            <div className="campo">
              <label>Autor(s)</label>
              <input name="Autor" type="text" className="input-text" placeholder="Autor(s)"
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
                placeholder="Escribe aqui maxiomo 500 carecteres"
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
                placeholder="0-7645-2641-3"
                onChange={(e) => setISBN(e.target.value)}
              />
            </div>

            <div className="campo">
              <label>o Revista</label>
              <input
                type="text"
                name="ISSN"
                className="input-text"
                placeholder="0317-8471"
                onChange={(e) => setISSN(e.target.value)}
              />
            </div>

            <div className="campo">
              <label>Link de la imagen</label>
              <input
                type="text"
                name="img"
                className="input-text"
                placeholder="https://http2.mlstatic.com/D_NQ_NP_805003-MLM46966539633_082021-O.webp"
                onChange={(e) => setimg(e.target.value)}
              />
            </div>


            <div className="form-group">
              <div className="input-group">
                <div className="input-group-btn">
                  <span className="fileUpload btn btn-success">
                    <span className="upl" id="upload">Adjunta tu documento</span>
                    <input type="file" name="fileUrl" className="upload up" id="up"  accept='.pdf' onChange={onInputChange} />
                  </span>
                </div>
              </div>
            </div>

            <div className="alinear-derecha flex">
              <input className="boton w-sm-100" type="submit" value="ENVIAR" />
            </div>
          </fieldset>
        </form>
      </section>
    </>
  )
}
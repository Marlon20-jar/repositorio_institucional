import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Spinner } from "../Spinner";

const DetailsDocuments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [document, setDocument] = useState({
    img: "",
    Titulo: "",
    Autor: "",
    createdAt: "",
    descripcion: "",
    Genero: "",
    _id: "",
  });
  const history = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:4000/api/documentos/${params.id}`)
      setIsLoading(false);
      setDocument(res.data);
    })();
    //console.log("works")
  }, [params.id]);

if (isLoading) {
  return <Spinner />;
}

  if(!document) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close"></button>
        <div className="inner-box">
          <img src={document.img} alt={document.Titulo} />
          <div className="info">
            <h1>{document.Titulo}</h1>
            <label className="black-on">Autor</label>
            <h3>{document.Autor}</h3><br />
            <label className="black-on">Fecha de subida y hora</label>
            <h4>{document.createdAt}</h4>
            <label className="black-on">Genero</label>
            <h4>{document.Genero}</h4><br />
            {/*<a href='#'><button>Descargar</button></a>*/}
            <button className='btn-1' onClick={() => history(`/pdf/${document._id}`)}>ver</button>
          </div><br/>
        </div>
        <h4 className="description">{document.descripcion}</h4>
      </div>
    </div>
  )
};

export default DetailsDocuments
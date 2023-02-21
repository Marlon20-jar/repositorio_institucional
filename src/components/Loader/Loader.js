import React, { useEffect, useState, useContext, useRef } from 'react';
//import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner';
import "../UI/ListDocument.css"

/*function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}*/

const Loader=() =>{
  const serchModal = useRef(null)
  const [documentos, setDocumentos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();

  //const query = useQuery();
  //const search = query.get("search");
  //console.log(search);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      /*const searchUrl = search 
      ? "/search/documentos?query=" + search
      : "http://localhost:4000/api/documentos/";*/
      const res = await axios.get("http://localhost:4000/api/documentos/");
      setDocumentos(res.data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="contenedor">
      <div className='holder'>
        <header className='header'>
          <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>Bienvenido</h2><br />
            <p className='header-text fs-18 fw-3'>Puedes consultar las novedades incluidas en el catálogo exclusivo del repositorio institucional que desempeñan una labor esencial en el fomento de la alfabetización y el aprendizaje, el establecimiento de las bases para el desarrollo y la custodia del patrimonio cultural y científico universal.</p>
          </div>
        </header>
      </div>

      <br></br>
      <ul className="DocumentosList">
        {/*--Inicio .Producto--*/}
        {documentos.map((Documento) => (
          <div
            onClick={() => history(`/edit/${Documento._id}`)}
            key={Documento._id}>
            <li className='cardDocument'>
              <img
                className='imagenche'
                width={230}
                height={345}
                src={Documento.img}
                alt={Documento.Titulo} />
              <div className='Tittle'>{Documento.Titulo}</div>
            </li>
          </div>
        ))}
        {/*--fin .producto--*/}
      </ul>
    </main>
  )
}

export default Loader
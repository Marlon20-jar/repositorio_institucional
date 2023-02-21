import React, { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import M from 'materialize-css'

const Navigation = () => {

    const SearchModal = useRef(null)
    const [search, setSearch] = useState('')
    const [docDetails, setDocDetails] = useState([])
    const history = useNavigate();

    useEffect(() => {
        M.Modal.init(SearchModal.current)
    }, [])

    const fetchDocuments = (query) => {
        setSearch(query)
        fetch('http://localhost:4000/api/documentos/search-documents/', {
            method: "post" , 
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                query
            })
        }).then(res=>res.json())
        .then(results=>{
            setDocDetails(results.Doc)
        })
    }

    return (
        <header>
            <header className="header__uaq">
                <h1 className="text">INSTIT<span className="color-acento">UAQ</span></h1>
            </header>

            <div className="container__menu">
                <div className="menu">
                    <input type="checkbox" id="check__menu" />
                    <nav>
                        <ul>
                            <li><a href="./" id="selected"></a></li>
                            <li><a href="#">Inicio de Sesión</a>
                                <ul>
                                    <li><a href="/Login">Docentes</a></li>
                                    <li><a href="/Login">Alumno</a></li>
                                    <li><a href="/LoginU">Visitantes</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Ayuda</a></li>
                            <li><i data-target="modal1" className="large material-icons modal-trigger" style={{ color: "white" }}>search</i></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="modal1" className="modal" ref={SearchModal} style={{ color: "black" }}>
                <div className="modal-content">
                    <input className="input-text"
                        type="text"
                        placeholder="Buscar..."
                        value={search}
                        onChange={(e) => fetchDocuments(e.target.value)}
                    />
                    <ul className="collection">
                        {docDetails.map((item)=>{
                            return <li className="collection-item" onClick={() => history(`/edit/${item._id}`)} 
                            style={{ color: "black" }} key={item._id}>{item.Titulo}</li>
                        })}
                    
                    </ul>
                </div>
                <div className="modal-footer">
                    <button href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={()=>setSearch('')}>Cerrar</button>
                </div>
            </div>
        </header>
    )
}

export default Navigation
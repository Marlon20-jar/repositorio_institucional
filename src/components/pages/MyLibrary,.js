import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavigationHome from '../NavigationHome'
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner';
import { MdDeleteForever } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import "../UI/Library.css"

export function MyLibrary() {
    const [documets, setDocuments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useNavigate();

    useEffect(() => {
        const getDocuemnts = async () => {
            setIsLoading(true);
            const res = await axios.get("http://localhost:4000/api/documentos/", {
            });
            console.log(res);
            setDocuments(res.data);
            setIsLoading(false);
        };
        getDocuemnts();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    if (!documets) {
        return null;
    }

    async function deleteDocument(DocumentId) {
        const res = await axios.delete("http://localhost:4000/api/documentos/" + DocumentId ,{
            headers: {
                "Authorization": "Bearer" + localStorage.getItem("jwt")
              },
        });
        if (res.status === 204)
            alert("Eliminado correctamente");
        setDocuments([...documets.filter((document) => document._id !== DocumentId)]);
    }

    return (
        <>
            <NavigationHome /><br></br>
            <ul className="DocumentosList">
                {/*--Inicio .Producto--*/}
                {documets.map((document) => (
                    <div
                        key={document._id}>
                        <li className='cardDocument'>
                            <img
                                className='imagenche'
                                width={230}
                                height={345}
                                src={document.img}
                                alt={document.Titulo} />
                            <div className='Tittle'>{document.Titulo}</div>
                            <div className="Contenedor-1">
                            <button className='btn-1' onClick={() => history(`/EditarDocuments/${document._id}`)}>
                                <BiEdit className='text-white' size={30} />
                            </button>
                            <button className='btn-2' onClick={() => deleteDocument(document._id)}>
                                <MdDeleteForever className='text-white' size={30} />
                            </button>
                        </div>
                        </li>
                    </div>
                ))}
                {/*--fin .producto--*/}
            </ul>
        </>
    )
}

export default MyLibrary;

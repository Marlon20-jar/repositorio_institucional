import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

export function PDF() {
    const [pdf, setPdf] = useState({
        Titulo: "",
        fileUrl: "",
        _id: "",
    });

    const params = useParams();

    useEffect(() => {
        const getPdf = async () => {
            const res = await axios.get(`http://localhost:4000/api/documentos/${params.id}`);
            console.log(res);
            setPdf(res.data);
        };
        getPdf();
    }, [params.id]);


    if (!pdf) {
        return null;
    }


    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <object
                data={pdf.fileUrl}
                type="application/pdf"
                width="100%"
                height="100%"
            >
                <br />


            </object>
        </div>
    )
}

export default PDF
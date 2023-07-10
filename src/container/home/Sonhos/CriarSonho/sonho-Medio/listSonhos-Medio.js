import { Link, useNavigate } from 'react-router-dom';
import '../CriarSonhos-modules.css'
import { useEffect, useState } from 'react';
import axios from 'axios';




function ListSonhos({ nomeSonho, descricaoSonho, Id, ponto }) {

    const navigate = useNavigate()
    const Pontos = localStorage.setItem('PontoSonho3', ponto)


    const handleIdSonho = async () => {

        await navigate(`/perfil/createsonhospostFormMedio/${Id}`)
        localStorage.setItem('IdSonhoMedio', Id)

    }


    return (
        <>


            <div onClick={handleIdSonho}>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>

                <div>

                    <h4>{nomeSonho}</h4>
                    <h5>{descricaoSonho}</h5>

                    <p>Excluir Sonho <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg> </p>

                </div>

                <s className='s-create'></s>


            </div>


        </>
    );
}

export default ListSonhos;

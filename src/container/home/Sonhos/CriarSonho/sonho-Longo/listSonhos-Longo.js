import { Link, useNavigate } from 'react-router-dom';
import '../CriarSonhos-modules.css'
import { useEffect, useState } from 'react';
import axios from 'axios';




function ListSonhos({ nomeSonho, descricaoSonho, Id, ponto }) {

    const navigate = useNavigate()
    const Pontos = localStorage.setItem('PontoSonho2', ponto)
    const token = localStorage.getItem('token')

    const handleIdSonho = async () => {

        await navigate(`/perfil/createsonhospostFormLongo/${Id}`)
        localStorage.setItem('IdSonhoLongo', Id)

    }


    return (
        <>


            <div onClick={handleIdSonho}>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
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

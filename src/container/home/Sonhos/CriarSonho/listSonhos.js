import { Link, useNavigate } from 'react-router-dom';
import './CriarSonhos-modules.css'
import { useEffect, useState } from 'react';
import axios from 'axios';




function ListSonhos({ nomeSonho, descricaoSonho, Id , ponto}) {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const Pontos = localStorage.setItem('PontoSonho1', ponto)


    const handleIdSonho = async () =>{

        await navigate(`/perfil/createsonhospostForm/${Id}`)
        localStorage.setItem('IdSonho', Id)

    }    


    return (
        <>


            <div onClick={handleIdSonho}>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
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

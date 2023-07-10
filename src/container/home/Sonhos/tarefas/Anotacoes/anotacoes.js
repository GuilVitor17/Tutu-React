import { Link, useNavigate } from 'react-router-dom';
import './anotacoes-modules.css'
import Perfil from '../../../perfil/perfil';
import Logo from '../../../../../img/LogoTutu.png';
import MenuBaixo from '../../../navbar/menuBaixo';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import ListaTarefa from './list';

    
function Anotacoes() {

    const [Idtarefas, setIdTarefa] = useState('')
    const [modalShow, setModalShow] = useState(false);
    const [tarefas, setTarefa] = useState([])


    const navigate = useNavigate();
    const token = localStorage.getItem('token')



    useEffect(() => {
        const handleFotoId = async () => {

            try {

                await fetch(`${process.env.REACT_APP_API_URL}/tarefa`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                        'authorization':`Bearer ${token}`
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setTarefa(data)
                    })

            } catch (error) {
                console.log(error)



            }

        }

        handleFotoId();
    }, [])

    const handleRouterCreateTrefa = async () =>{
        navigate(`/perfil/anotacoescreate`)
    }


    return (
        <div className='anotacoes'>
            <div className='barra-fixed'>

                <div className='barra-alta-home'>
                    <div className='Logo-alta'><img src={Logo} /></div>
                    <Link to='/perfil/tarefa'> <div className='Logo-volta'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></div></Link>
                </div>
            </div>

            <Perfil />




            <div className='add-tarefa'>

                <div className='list-tarefas'>

                    {tarefas.map((api) =>

                        <ListaTarefa
                            titulo={api.title}
                            descricao={api.description}
                            data={api.date}
                            IdTarefa={api._id}
                        />

                    )}

                </div>



                <Button variant="warning" className='button-add-tarefa' onClick={handleRouterCreateTrefa}>
                    <b>CRIAR TAREFA</b>
                </Button>

                

            </div>


            <MenuBaixo />



        </div>
    );
}

export default Anotacoes;

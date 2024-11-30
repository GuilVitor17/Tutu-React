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
import Navbarr from '../../../navbar/navbar';

    
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
     <Navbarr />

          

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


            



        </div>
    );
}

export default Anotacoes;

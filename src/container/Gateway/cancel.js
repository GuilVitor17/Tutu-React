import { Link, useNavigate } from 'react-router-dom';
import './gateway-modules.css'
import Perfil from '../../container/home/perfil/perfil';
import Logo from '../../img/LogoTutu.png'
import MenuBaixo from '../../container/home/navbar/menuBaixo';
import ImgCurso from '../../../src/img/curso.png'
import Button from 'react-bootstrap/esm/Button';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import Swal from 'sweetalert2';



function ConfirmSonhoCancel() {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')


    useEffect(() => {
        const handlepagamento = async () => {

            try {

                let timerInterval
               await Swal.fire({
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })

                localStorage.setItem('Comprado', 'Comprado')

                navigate(`/perfil/curso/aulas/check`)



            } catch (error) {
                console.log(error)



            }

        }

        handlepagamento();
    }, [])


    return (
        <div className="tarefas">

            <div className='barra-fixed'>

                <div className='barra-alta-home'>
                    <div className='Logo-alta'><img src={Logo} /></div>
                    <Link to='/home'> <div className='Logo-volta'></div></Link>
                </div>
            </div>


            <div className='msg-cancel'>
                <h2>Pagamento Cancelada</h2>
            </div>








        </div>
    );
}

export default ConfirmSonhoCancel;

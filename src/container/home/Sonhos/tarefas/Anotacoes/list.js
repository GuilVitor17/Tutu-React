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




function ListaTarefa({ titulo, descricao, data, IdTarefa }) {


    const navigate = useNavigate();
    const token = localStorage.getItem('token')



    const handleclickTarefa = async () => {

        try {

            await axios.delete(`${process.env.REACT_APP_API_URL}/tarefa/${IdTarefa}`,{
                
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                
            })
                .then(async(res) => {
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
                    }).then( async (result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })

                    await Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(res)
                    navigate(`/perfil/tarefa`)
                })

        } catch (error) {

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

            await Swal.fire({
                position: 'top-center',
                icon: 'error',
                showConfirmButton: false,
                title: 'Ops... Deu um error!',
                timer: 1500
            })

        }

    }



    return (
        <>




            <div className='tarefa-get'>

                <div className='img-tarefa'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                </svg><p>{data}</p> <div onClick={handleclickTarefa} className='delete-tarefa'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg></div> </div>
                <div className='conteudo-tarefa'> <p>{titulo}</p> <h5>{descricao}</h5> </div>








            </div>





        </>
    );
}

export default ListaTarefa;

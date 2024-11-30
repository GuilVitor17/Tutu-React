import { Link, useNavigate } from 'react-router-dom';
import './aulas-modules.css'
import Logo from '../../../../img/LogoTutu.png'
import Perfil from '../../perfil/perfil';
import MenuBaixo from '../../navbar/menuBaixo';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';



function AulasPagasPreparativos() {



    const [descricao, setDescricao] = useState('')
    const urlPrivade = process.env.REACT_APP_ROUTER_PRIVADE
    
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    const handleDescricao = (e) =>{
        setDescricao(e.target.value)
    }



    const handlesubmitPreparativo = async (e) => {

        e.preventDefault();


        try {

            await axios.post(`${process.env.REACT_APP_API_URL}/curso/rotapaga`, {
                descricao: descricao,
                routerPrivadeCurso:urlPrivade
            },
            
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            
            )
                .then( async (res) => {

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
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                        navigate(`/perfil/aulaspagas`)
                        const verify = 'Aprovade'
                        localStorage.setItem('curso', verify)

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
                title: 'Verifique Seus Dados',
                timer: 1500
            })
            console.log(error)

        }

    }




    return (
        <div className="aulas-preparativos">

          

            <div className='menu-preparativo'>
                <b>O que voce espera desse curso?</b>

                <div className='aulas-preparativo'>

                    <Form onSubmit={handlesubmitPreparativo}>
                        <Form.Select aria-label="Default select example" onChange={handleDescricao}>
                            <option>Escolha uma opção</option>
                            <option value="COMPRADO">Aprender sobre os fundamentos da progamação!</option>
                            <option value="COMPRADO">Espero Aprender de Verdade!</option>
                            <option value="COMPRADO">Estou em Transição de carreira, espero aprender muito!</option>
                        </Form.Select>

                        <Button type='submit' variant="warning">Prosseguir</Button>{' '}

                    </Form>



                </div>
            </div>



        </div>
    );
}

export default AulasPagasPreparativos;

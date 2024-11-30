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





function AnotacoesCreate() {

    
    const [title, settitle] = useState('')
    const [descricao, setDescricao] = useState('')
    const [date, setDate] = useState('')
    const ponto = 20

    const navigate = useNavigate();
    const token = localStorage.getItem('token')



    const handleTitle = (e) => {
        settitle(e.target.value)

    }

    const handleDescription = (e) => {
        setDescricao(e.target.value)

    }

    const handleDate = (e) => {
        setDate(e.target.value)

    }



    const handlesubmittarefa = async (e, init) => {

        e.preventDefault();


        try {

            await axios.post(`${process.env.REACT_APP_API_URL}/tarefa`, {
                title: title,
                date: date,
                description: descricao,
                ponto:ponto
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
                        navigate(`/perfil/anotacoes`)

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
        <div className='anotacoes'>
          
          <Navbarr />

            <Perfil />




            <div className='add-tarefa-create'>

                <div className='list-tarefas-create'>

                <Form onSubmit={handlesubmittarefa}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Qual Tarefa de Hoje?</Form.Label>
                        <Form.Control type="text" value={title} required onChange={handleTitle} maxLength={20} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Não é Hoje? Escolha o Seu Dia. - (opcional)</Form.Label>
                        <Form.Control type="date" value={date} required onChange={handleDate} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>O que voce vai fazer Hoje?</Form.Label>
                        <Form.Control as="textarea" rows={3} required value={descricao} onChange={handleDescription} maxLength={50} />
                    </Form.Group>

                    <Button type='submit' className='button-tarefa-create' variant="warning"><b>Adicionar</b></Button>{' '}

                </Form>

                </div>


               
            </div>


            



        </div>
    );
}

export default AnotacoesCreate;

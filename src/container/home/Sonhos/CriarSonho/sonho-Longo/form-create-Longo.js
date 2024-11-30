import { Link, useNavigate } from 'react-router-dom';
import '../CriarSonhos-modules.css'
import Button from 'react-bootstrap/esm/Button';
import MenuBaixo from '../../../navbar/menuBaixo';
import Perfil from '../../../perfil/perfil';
import Logo from '../../../../../img/LogoTutu.png'
import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Datetime from 'react-datetime';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbarr from '../../../navbar/navbar';


function CreateFormSonhos() {

    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(true)
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(1);
    const [result, setResult] = useState(0);
    const [operador, setOperador] = useState('Dividir')

    const ValorCalculado = Math.trunc(value1 / value2)
    const [nameSonho, setNameSonho] = useState('')
    const [descricaoSonho, setDescricaoSonho] = useState('')
    const [comentario, setComenatrio] = useState('')
    const SonhoCategoria = localStorage.getItem('Sonho')
    const ponto = 20;

    const token = localStorage.getItem('token')

    const handleChange = (e) => {
        setValue1(e.target.value)
        setDisabled(false)

    }

    const handleChange2 = (e) => {
        setValue2(e.target.value)
        setDisabled(false)


    }

    const handleNameSonho = (e) =>{
        setNameSonho(e.target.value)
    }

    const handleSonhoComenatrio = (e) =>{
        setComenatrio(e.target.value)
    }

    const handleDescricaosonho = (e) =>{
        setDescricaoSonho(e.target.value)
    }


    const handleNewSonho = async (e) => {

        e.preventDefault()

        try {

           await axios.post(`${process.env.REACT_APP_API_URL}/sonhoLongo`, {
                nameSonho: nameSonho,
                descricaoSonho: descricaoSonho,
                valorSonho: ValorCalculado,
                categoria: SonhoCategoria,
                comentarioSonho : comentario,
                ponto:ponto

            },
            {
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            )
                .then( async (resp) => {
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
                    await navigate(`/perfil/createsonhos`)


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
        <div className="create-sonhos-create">
     <Navbarr />

          
            <Form onSubmit={handleNewSonho}>

            <div className='form-create-sonho'>

                
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><h5> Qual Seu Sonho? </h5></Form.Label>
                        <Form.Control type="text" maxLength={20} value={nameSonho} onChange={handleNameSonho} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> <h5>O que vai fazer quando conquistar?</h5></Form.Label>
                        <Form.Control type='text' maxLength={80} value={descricaoSonho} onChange={handleDescricaosonho} required />
                    </Form.Group>

            </div>


            <div className='div-sonhos-categoria-craete'>
                <h5>Quanto vale o seu sonho?</h5>

                <p>R$ {value1}</p>


                <Slider
                    aria-label="Temperature"
                    defaultValue={100}
                    onChange={handleChange}
                    value={value1}
                    valueLabelDisplay="auto"
                    marks
                    min={0}
                    step={1000}
                    max={20000}
                />

                <div className='tempo-sonho'>

                    <h5>Em quanto tempo quer realiza-lo?</h5>

                    <div>
                        <Button variant="outline-warning" value={1} onClick={handleChange2}>1 - MES</Button>
                        <Button variant="outline-warning" value={2} onClick={handleChange2}>2 - MES</Button>
                        <Button variant="outline-warning" value={3} onClick={handleChange2}>3 - MES</Button>
                        <Button variant="outline-warning" value={4} onClick={handleChange2}>4 - MES</Button>
                        <Button variant="outline-warning" value={5} onClick={handleChange2}>5 - MES</Button>
                    </div>

                    <div>
                        <Button variant="outline-warning" value={12} onClick={handleChange2}>1 - ANO</Button>
                        <Button variant="outline-warning" value={24} onClick={handleChange2}>2 - ANO</Button>
                        <Button variant="outline-warning" value={36} onClick={handleChange2}>3 - ANO</Button>
                        <Button variant="outline-warning" value={48} onClick={handleChange2}>3 - ANO</Button>
                        <Button variant="outline-warning" value={60} onClick={handleChange2}>5 - ANO</Button>
                    </div>
                </div>

                <div className='valorCalculado'>


                    <h5>Para realizar o seu sonho, você precisar guardar:</h5>
                    <h3>R$ {ValorCalculado} por mês</h3>
                <br /> 

                    <Form.Group id='input-commit' className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type='text' maxLength={130} placeholder='Escreva um comentario!' value={comentario} onChange={handleSonhoComenatrio} required />
                </Form.Group>

                </div>
                
                <Button disabled={disabled} type='submit' variant="warning" className='prosseguir-create'><b>Prosseguir</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg></Button>{' '}

            </div>


            </Form>

            


        </div>
    );
}


export default CreateFormSonhos;

import { Link, useNavigate } from 'react-router-dom';
import './perfil-modules.css'
import LogoAmrelo from '../../../img/LogoTutu.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


function PerfilCreate() {


    const [name, setName] = useState('')
    const [idade, setIdade] = useState('')
    const [cidade, setCidade] = useState('')
    const [sexo, setSexo] = useState('')
    const [telefone, setTelefone] = useState('')
    const [fotoUser, setFotoUser] = useState('')

    const token = localStorage.getItem('token')
    const navigate = useNavigate()


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleFotoUser = (e) => {
        setFotoUser(e.target.file[0])
    }

    const handleIdade = (e) => {
        setIdade(e.target.value)
    }

    const handleCidade = (e) => {
        setCidade(e.target.value)
    }

    const handleSexo = (e) => {
        setSexo(e.target.value)
    }

    const handleTelefone = (e) => {
        setTelefone(e.target.value)
    }

    const DadosUpdate = async (e) => {

        try {
            e.preventDefault();

            await axios.post(`${process.env.REACT_APP_API_URL}/Dados/dados`, {
                name: name,
                idade: idade,
                cidade: cidade,
                sexo: sexo,
                telefone: telefone
            },
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
            )
                .then(async response => {
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

                    navigate(`/perfil/upload`)

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


        }

    }


    return (
        <div className="perfil-create-user">
            <div className='barra-fixed'>

                <div className='barra-alta-home'>
                    <div className='Logo-alta'><img src={LogoAmrelo} /></div>

                </div>
            </div>


            <div className='dadosUser'>

            <h2 className='title-dados'><b>Estamos quase lá!</b></h2>


                <Form onSubmit={DadosUpdate}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome Preferencial</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleName} placeholder="Nome" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Idade</Form.Label>
                        <Form.Control type="text" value={idade} onChange={handleIdade} placeholder="Idade" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control type="text" value={sexo} onChange={handleSexo} placeholder="Sexo" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" value={telefone} onChange={handleTelefone} placeholder="Telefone" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" value={cidade} onChange={handleCidade} placeholder="Cidade" required />
                    </Form.Group>



                    <Button variant="primary" className='button-edit-dados' type="submit">
                        <b> Prosseguir </b>
                    </Button>
                </Form>
            </div>




        </div>
    );
}

export default PerfilCreate;

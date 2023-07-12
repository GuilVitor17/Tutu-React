import './create-modules.css'
import LogoAmrelo from '../../img/LogoTutu.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function LoginCreate() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const navigate = useNavigate('')


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {

        setPassword(e.target.value)

    }

    const handleName = (e) => {

        setName(e.target.value)

    }


    const FormCreate = async (e) => {

        try {
            e.preventDefault()

            await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
                email: email,
                password: password,
                name: name
            })
                .then(async response => {
                    await localStorage.setItem('token', response.data.token)
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
                        text: 'Level +20',
                        showConfirmButton: false,
                        timer: 1500
                    })


                    navigate(`/perfil/create`)



                })
        } catch (error) {
            console.log(error)
            await Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Verifique Seus Dados',
                showConfirmButton: false,
                timer: 1500
            })
        }



    }



    return (
        <div className="logincreate">
            <div className='barra-alta'>

            </div>

            <div className='Logo-alta'><img src={LogoAmrelo} /></div>
            <Link to='/login'> <div className='Logo-volta'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg></div></Link>



            <div className='form-create'>

            <div className='App-texto-create'><h3>Realizar Cadastro</h3></div>
            <div className='App-texto-create'><p>Não tem uma Conta? Não tem Problema, Crie uma agora mesmo.</p></div>


                <Form onSubmit={FormCreate}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg></InputGroup.Text>
                        <Form.Control
                            placeholder="Nome Completo"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            type='text'
                            value={name}
                            onChange={handleName}
                            required

                        />

                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg></InputGroup.Text>
                        <Form.Control
                            placeholder="Email"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            type='email'
                            value={email}
                            onChange={handleEmail}
                            required
                        />

                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></InputGroup.Text>
                        <Form.Control
                            placeholder="Senha"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            type='password'
                            value={password}
                            onChange={handlePassword}
                            required

                        />

                    </InputGroup>




                    <p className='criar'>Tem uma conta? <Link to='/login'> faça login</Link></p>

                    <Button variant="primary" type='submit' className='button-create-app'><b>Criar minha conta</b></Button>


                </Form>
            </div>







        </div>
    );
}

export default LoginCreate;

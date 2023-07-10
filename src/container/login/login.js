import './login-modules.css'
import LogoAmrelo from '../../img/LogoTutuAmare.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()



  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {

    setPassword(e.target.value)

  }


  const Formlogin = async (e) => {

    try {
      e.preventDefault()

      await axios.post(`${process.env.REACT_APP_API_URL}/auth/authenticate`, {
        email: email,
        password: password,
      })
        .then(async response => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('IdUser', response.data.user._id)
          console.log(response.data)
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

         await navigate(`/home`)


        })
    } catch (error) {
      console.log(error)
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
        title: 'Verifique Seus Dados',
        showConfirmButton: false,
        timer: 1500
      })
    }



  }







  return (
    <div className="login">
      <div className='barra'></div>





      <div className='form'>
        <div className='Logo-login'><img src={LogoAmrelo} /></div>

        <div className='App-texto'><h3>O <b>melhor</b> app de gestão financeira infantil do mercado!
        </h3></div>

        <Form onSubmit={Formlogin}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg></InputGroup.Text>
            <Form.Control
              placeholder="Usuario"
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

          <Link to='/loginforgot'><p className='esquece-senha'>Esqueceu sua senha?</p></Link>


          <Button variant="primary" type='submit' className='button-home'><b>Entrar em minha conta</b></Button>{' '}

          <p className='criar'>Não tem uma conta?<Link to='/logincreate'> Registre-se</Link></p>

          <Link to='/logincreate'><Button variant="primary" className='button-create'><b>Criar minha conta</b></Button></Link>



        </Form>
      </div>







      <div className='barra2'></div>
    </div>
  );
}

export default Login;

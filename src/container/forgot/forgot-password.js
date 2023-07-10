import './forgot-modules.css'
import LogoAmrelo from '../../img/LogoTutu.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';

function LoginForgot() {


    const [email, setEmail] = useState('')

    const navigate = useNavigate('')
 

    const handleEmail = (e) => {
       setEmail(e.target.value)
    }


   const FormForgorPassword = async (e) => {

       try {
           e.preventDefault()

           await axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot_password`,{
                email:email,
               
            })
            .then( async response =>{
                
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
             
                navigate(`/loginNewpassword`)

    
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
        <div className="loginforgot">
            <div className='barra-alta'>

            </div>

            <div className='Logo-alta'><img src={LogoAmrelo} /></div>
           <Link to='/login'> <div className='Logo-volta'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg></div></Link>



            


            <div className='form-forgot'>


            

                <Form onSubmit={FormForgorPassword}>

                <div className='App-texto-forgot'><h3>Recuperação
                de senha</h3></div>
            <div className='App-texto-forgot'><p>Perdeu sua senha? Nós podemos te
                ajudar, basta inserir o email de sua
                conta e te enviaremos um código
                de confirmação.</p></div>
                    <InputGroup className="mb-3">
                       

                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                    <div className='App-texto-forgot-email'><p>Email Cadastrado</p></div>
                        <Form.Control
                            placeholder="usuário@exemplo.com.br"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            type='email'
                            value={email}
                            onChange={handleEmail}
                        />

                    </InputGroup>


                   <Button variant="primary" type='submit' className='button-prosseguir'><b>Prosseguir</b></Button>


                </Form>
            </div>







        </div>
    );
}

export default LoginForgot;

import { Link, useNavigate } from 'react-router-dom';
import './perfil-modules.css'
import LogoAmrelo from '../../../img/LogoTutu.png'
import User from '../../../img/User.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


function PerfilFoto() {



    const [fotoUser, setFotoUser] = useState('')

    const token = localStorage.getItem('token')
    const navigate = useNavigate()




    const handleFotoUser = (e) => {
        setFotoUser(e.target.files[0])
        console.log(e.target.files)
    } 


    const FotoUsuario = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append('file', fotoUser)

        const headers = {
            'headers': {
                'Content-Type': 'aplication/json',
                'Authorization': `Bearer ${token}`
            }
        }

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/upload/post`, formData, headers, {

            originalname:fotoUser,
           

            },
                {
                    headers: {
                        'Content-Type': 'aplication/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then( async (response) => {
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
                    console.log(response)

                    navigate(`/home`)

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
                showConfirmButton: false,
                title: 'Verifique Seus Dados',
                timer: 1500
            })


        }

    }



    return (
        <div className="perfilUpload">
          

            <div className='dadosUser'>
            <h2 className='title-dados-foto'><b>Escolha uma Foto!</b></h2>


                <Form onSubmit={FotoUsuario}>


                    <div className='imageId-user'><img className='icon-usuario' src={User} />
                        <Form.Control type="file" name='image' onChange={handleFotoUser} className='input-img-upload' placeholder="Foto" required />
                    </div>
                    <Button variant="primary" className='button-upload-dados' type="submit">
                        <b>Salvar Foto</b>
                    </Button>
                </Form>
            </div>




        </div>
    );
}

export default PerfilFoto;

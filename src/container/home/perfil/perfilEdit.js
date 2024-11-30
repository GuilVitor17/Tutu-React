import { Link, useNavigate } from 'react-router-dom';
import './perfil-modules.css'
import LogoAmrelo from '../../../img/LogoTutu.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import MenuBaixo from '../navbar/menuBaixo';
import Swal from 'sweetalert2';
import Navbarr from '../navbar/navbar';


function PerfilEdit() {


    const [name, setName] = useState('')
    const [idade, setIdade] = useState('')
    const [cidade, setCidade] = useState('')
    const [sexo, setSexo] = useState('')
    const [telefone, setTelefone] = useState('')
    const [fotoUser, setFotoUser] = useState('')
    const [foto, setFoto] = useState('')

    const token = localStorage.getItem('token')
    const IdFoto = localStorage.getItem('IdFoto')
    const IdDados = localStorage.getItem('IdDados')


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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


    useEffect(() => {
        const handleFotoId = async () => {

            try {

                await fetch(`${process.env.REACT_APP_API_URL}/upload/post`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                        'authorization': `Bearer ${token}`
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setFoto(data.posts[0].url)
                        localStorage.setItem('IdFoto',data.posts[0]._id)
                        console.log(data)
                    })

            } catch (error) {
                console.log(error)



            }

        }

        handleFotoId();
    }, [])



    const DadosUpdate = async (e) => {

        try {

            e.preventDefault();

            await axios.put(`${process.env.REACT_APP_API_URL}/Dados/${IdDados}`, {
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

    const FotoUsuario = async (e) => {

        e.preventDefault();

        const dados = new FormData();

        dados.append('image', fotoUser)

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/upload/post`, dados, {

                originalname: fotoUser

            },
                {
                    headers: {
                        'Content-Type': 'aplication/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((response) => {
                    console.log(response)
                    alert('Foto cadastrada')

                })

        } catch (error) {

            console.log(error)

        }



    }


    const FotoUsuarioDelete = async (e) => {

        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/upload/post/${IdFoto}`,
                {
                    headers: {
                        'Content-Type': 'aplication/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then( async (data) => {
                    console.log(data)
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
                    localStorage.removeItem('IdFoto')
                    navigate(`/perfil/upload`)


                })

        } catch (error) {

            await Swal.fire({
                position: 'top-center',
                icon: 'error',
                showConfirmButton: false,
                title: 'Ops... Adicione uma foto',
                timer: 1500
            })
            console.log(error)
            navigate(`/perfil/upload`)


        }



    }





    return (
        <div className="perfiledit">
     <Navbarr />

        
            <form onSubmit={FotoUsuario} encType='multipart/form-data'>
                {/* <div className='imageId'><img src={foto} />
                
                    <input type='file' name='image' onChange={handleFotoUser} className='input-img' placeholder='imagem' required />

                </div> */}
               
                {/* <Button variant="primary" className='button-edit-dados' onClick={handleShow}>
                <b> Editar Foto </b>
                </Button> */}

                <Modal show={show} size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Deseja Excluir a Foto Atual?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Button variant="danger" onClick={FotoUsuarioDelete} type="submit">
                        <b> Excluir Foto </b>
                    </Button></Modal.Body>
                  
                </Modal>

            </form>


            <div className='dadosUser'>
                <Form onSubmit={DadosUpdate}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome Personalizado</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleName} placeholder="Nome Personalizado" required />
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
                        <b> Editar Dados </b>
                    </Button>
                </Form>
            </div>



            

        </div>
    );
}

export default PerfilEdit;

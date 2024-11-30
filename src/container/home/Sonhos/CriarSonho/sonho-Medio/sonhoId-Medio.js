import { Link, useNavigate } from 'react-router-dom';
import '../CriarSonhos-modules.css'
import Button from 'react-bootstrap/esm/Button';
import MenuBaixo from '../../../navbar/menuBaixo';
import Perfil from '../../../perfil/perfil';
import Logo from '../../../../../img/LogoTutu.png'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbarr from '../../../navbar/navbar';


function SonhosId() {


    const token = localStorage.getItem('token')
    const Id = localStorage.getItem('IdSonhoMedio')


    const [categoria, setCategoria] = useState('')
    const [name, setName] = useState('')
    const [descricao, setDescrica] = useState('')
    const [valor, setValor] = useState('')
    const [comentario, setComentario] = useState('')
    const navigate = useNavigate(); 


    useEffect(() =>{
           
        const handleIdSonho = async () =>{

        try {

           await axios.get(`${process.env.REACT_APP_API_URL}/sonhoMedio/${Id}`,{

                headers: {
                    'Content-Type': 'aplication/json',
                    'authorization': `Bearer ${token}`
                }
                
            })
            .then(data =>{
                console.log(data)
                setCategoria(data.data.categoria)
                setDescrica(data.data.descricaoSonho)
                setValor(data.data.valorSonho)
                setName(data.data.nameSonho)
                setComentario(data.data.comentarioSonho)
            })
            
        } catch (error) {
            
        }


    }

    handleIdSonho();

},[])



    const deleteTarefas = async () => {

        try {

            await axios.delete(`${process.env.REACT_APP_API_URL}/sonhoMedio/${Id}`, {

                headers: {
                    'Content-Type': 'aplication/json',
                    'authorization': `Bearer ${token}`
                }

            })
                .then( async data => {
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
                    timer: 1500
                })

        }

    }




    return (
        <div className="create-sonhos-create">
     <Navbarr />
          


            <div className='div-inf-sonho-id'>

                <div className='inf-Id-sonho'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                    </svg>

                    <div>

                        <b className='title-sonho-id'>{name}</b>
                        <h5>{descricao}</h5>
                        <br />

                        <p onClick={deleteTarefas}>Excluir Sonho <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg> </p>

                        <h6 className='categoriaId'>{categoria}</h6>

                    </div>

                    <s className='s-Id'></s>


                </div>
            </div>

            <div className='quanto-vale'>

                <div className='valorCalculado'>


                    <h5>Para realizar o seu sonho, você precisar guardar:</h5>
                    <h3>R$ {valor} por mês</h3>
                    <s className='s'></s>


                </div>
                <svg id='cloud-background' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                </svg>
                <svg id='cloud-background2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                </svg>

            </div>


            <p className='name-commit'>Comentário</p>

            <div className='list-commit'>

                <h4>{comentario}</h4>


            </div>





            


        </div>
    );
}


export default SonhosId;

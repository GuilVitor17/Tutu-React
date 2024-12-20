import { Link, useNavigate } from 'react-router-dom';
import './gateway-modules.css'
import Perfil from '../../container/home/perfil/perfil';
import Logo from '../../img/LogoTutu.png'
import MenuBaixo from '../../container/home/navbar/menuBaixo';
import ImgCurso from '../../../src/img/curso.png'
import Button from 'react-bootstrap/esm/Button';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import Swal from 'sweetalert2';



function ConfirmSonho() {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleRouterQuiz = async () => {

        await navigate(`/perfil/quiz`)

    }

    const handleRouterGame = async () => {

        await navigate(`/perfil/game`)

    }

    const handleRouterAnotacoes = async () => {

        await navigate(`/perfil/anotacoes`)
        const play = document.getElementById("play");
        play.style.color = '#929DA9'

    }


    const curso =localStorage.getItem("curso")




    const handleSubmit = async () => {


        try {

           await axios.post(`${process.env.REACT_APP_API_URL}/pagamento/pay`,{

           
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        

           })
           .then( async (res) =>{


            try {
                
                window.location = await res.data.forwardLink
                console.log(res.data)
                
            } catch (error) {

                console.error(error)
                
            }
            
               
            
           })
          

        } catch (error) {
            console.log(error)

        }


    }



    return (
        <div className="tarefas">

         

            <Perfil />

            <div className='checkout-curso'>

                <div className='grade-curso'>

                    <div className='img-curso'>

                        <img src={ImgCurso} />

                        <div>
                            <b>Curso de progamação</b>
                            <ListGroup>
                                <ListGroup.Item><h6>Iniciante</h6></ListGroup.Item>
                                <ListGroup.Item><h6>20h de Aulas</h6></ListGroup.Item>
                                <ListGroup.Item><h6>Certificado</h6></ListGroup.Item>
                                <ListGroup.Item><h6>Aulas Gravadas</h6></ListGroup.Item>
                            </ListGroup>


                        </div>

                    </div>


                    <div><p className='descr-curso' >O curso de programação para crianças é uma excelente oportunidade para os jovens explorarem o mundo da tecnologia de forma divertida e educativa. Nesse curso, as crianças têm a oportunidade de aprender os conceitos básicos de programação de forma interativa e lúdica.</p></div>
                    {curso === 'Aprovade' ?(
                    <div><Button  variant="warning"><Link style={{textDecoration:"none", color:"#000"}} to={'/perfil/aulaspagas'}><b>Acessar Treinamento</b></Link></Button>{' '}</div>
                    ):(
                        <div><Button onClick={handleSubmit} variant="warning"><b>Comprar</b></Button>{' '}</div>
                    )}


                </div>



            </div>

            


        </div>
    );
}

export default ConfirmSonho;

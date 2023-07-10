import { Link, useNavigate } from 'react-router-dom';
import './quiz-modules.css'
import Perfil from '../../../perfil/perfil';
import Logo from '../../../../../img/LogoTutu.png'
import MenuBaixo from '../../../navbar/menuBaixo';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QuizPerguntas from './perguntas';






function Quiz() {


    const navigate = useNavigate()


    const handleRouterQuizFutebol = async () =>{

        await navigate(`/perfil/quizperguntas`)
       
    }





    return (
        <div className="quiz-app">

            <div className='barra-fixed'>

                <div className='barra-alta-home'>
                    <div className='Logo-alta'><img src={Logo} /></div>
                    <Link to='/perfil/tarefa'> <div className='Logo-volta'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></div></Link>
                </div>
            </div>

            <Perfil />


             <div className='div-quiz'>

                <div onClick={handleRouterQuizFutebol} className='quiz-option'>
                <h3>FUTEBOL</h3> 
                </div>
                {/* <div className='quiz-option'>
                <h3>INGLES</h3> 
                </div>
                <div className='quiz-option'>
                <h3>ESPANHOL</h3> 
                </div> */}

            </div>



            <MenuBaixo />


        </div>
    );
}

export default Quiz;

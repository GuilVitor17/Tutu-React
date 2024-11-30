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



            


        </div>
    );
}

export default Quiz;

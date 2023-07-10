import { Link, useNavigate } from 'react-router-dom';
import './quiz-modules.css'
import Perfil from '../../../perfil/perfil';
import Logo from '../../../../../img/LogoTutu.png';
import MenuBaixo from '../../../navbar/menuBaixo';
import { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';
import Swal from 'sweetalert2'


function Options({ perguntas, result}) {

    const [descricao, setDescricao] = useState([''])
    const [perguntass, setPerguntas] = useState([])

    const navigate = useNavigate();


    useEffect(() => {
        const handleFotoId = async () => {

            try {

                await fetch(`${process.env.REACT_APP_API_URL}/quiz/questions`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                        // 'authorization':`Bearer ${token}`
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setDescricao(data[1].description)
                        console.log(data[1].alternatives)
                    })

            } catch (error) {
                console.log(error)



            }

        }

        handleFotoId();
    }, [])




    var ponto = Number(localStorage.getItem('PontoQuiz'))


    const handlebutton = async () => {



        try {


            if (result == true) {
                await navigate('/perfil/quizperguntas')
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Acertou',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else{
                await navigate('/perfil/quizperguntas')

                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Errou',
                    showConfirmButton: false,
                    timer: 1500
                  })

            }

                
           
        } catch (error) {
            console.log(error)
            

        }

}


    return (
        <>


            <div onClick={handlebutton} className='quiz-option-select'>

                <b>{perguntas}</b>



            </div>




        </>
    );
}

export default Options;

import { Link, useNavigate } from 'react-router-dom';
import './trofeus-modules.css'
import MenuBaixo from '../navbar/menuBaixo';
import Perfil from '../perfil/perfil';
import Logo from '../../../img/LogoTutu.png'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Navbarr from '../navbar/navbar';




function TrofeusPontos() {

const token = localStorage.getItem('token')

    
const [dadosSonho, setDadosSonho ] = useState(['']);
const [dadosSonhoMedio, setDadosSonhoMedio ] = useState(['']);
const [dadosSonhoLongo, setDadosSonhoLongo ] = useState(['']);

const [ponto1, setPonto1] = useState(0);
const [ponto2, setPonto2] = useState(0);
const [ponto3, setPonto3] = useState(0);
const [ponto4, setPonto4] = useState(0);
const [ponto5, setPonto5] = useState(0);



useEffect(() => {

const loadTarefas = async () => {

    try {

        await axios.get(`${process.env.REACT_APP_API_URL}/sonho`, {

            headers: {
                'Content-Type': 'aplication/json',
                'authorization': `Bearer ${token}`
            }

        })
            .then(data => {
                setPonto1(data.data[0].ponto)
            })

    } catch (error) {

        console.log(error)

    }

}

loadTarefas();

}, [])



useEffect(() => {

const loadTarefas = async () => {

    try {

        await axios.get(`${process.env.REACT_APP_API_URL}/sonhoLongo`, {

            headers: {
                'Content-Type': 'aplication/json',
                'authorization': `Bearer ${token}`
            }

        })
            .then(data => {
                setDadosSonhoLongo(data.data)
                setPonto2(data.data[0].ponto)

            })

    } catch (error) {

        console.log(error)

    }

}

loadTarefas();

}, [])



useEffect(() => {

const loadTarefas = async () => {

    try {

        await axios.get(`${process.env.REACT_APP_API_URL}/sonhoMedio`, {

            headers: {
                'Content-Type': 'aplication/json',
                'authorization': `Bearer ${token}`
            }

        })
            .then(data => {
                setPonto3(data.data[0].ponto)

            })

    } catch (error) {

        console.log(error)

    }

}

loadTarefas();

}, [])


const [tarefasPonto, setTarefaPonto] = useState([0])

useEffect(() => {
    const handleFotoId = async () => {

        try {

            await fetch(`${process.env.REACT_APP_API_URL}/tarefa`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'aplication/json',
                    'authorization':`Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    setTarefaPonto(data[0].ponto)
                })

        } catch (error) {
            console.log(error)



        }

    }

    handleFotoId();
}, [])



 const pontuacao = localStorage.getItem('PontoQuiz') 

 localStorage.setItem('PontoSonho1', ponto1)
 localStorage.setItem('PontoSonho2', ponto2)
 localStorage.setItem('PontoSonho3', ponto3)
 localStorage.setItem('PontoSonho4', tarefasPonto)
 
 
 const Pontos1 = localStorage.getItem('PontoSonho1')
 const Pontos2 = localStorage.getItem('PontoSonho2')
 const Pontos3 = localStorage.getItem('PontoSonho3')
 const Pontos4 = localStorage.getItem('PontoSonho4')
 const Pontos5 = localStorage.getItem('pontoHome')
 
 const newspontos1 = Number(Pontos1 * 1) 
 const newspontos2 = Number(Pontos2 * 1) 
 const newspontos3 = Number(Pontos3 * 1) 
 const newspontos4 = Number(Pontos4 * 1) 
 const newspontos5 = Number(Pontos5 * 1) 

 const ponto =  newspontos1 + newspontos2 + newspontos3 + newspontos4 + newspontos5

 const Result = Number(ponto)

 const now = Result






    return (
        <div className="trofeus">

     <Navbarr />
         

            <Perfil />

            <div className='trofeus-div-ponto'>


                <div>

                Meus Pontos TUTU: 

                <b>{Result}</b>

                De 100: 
                    
                </div>


            </div>

            


        </div>
    );
}

export default TrofeusPontos;

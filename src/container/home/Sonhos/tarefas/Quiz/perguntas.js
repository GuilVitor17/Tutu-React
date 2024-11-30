import { Link, Route, Routes } from 'react-router-dom';
import './quiz-modules.css'
import Perfil from '../../../perfil/perfil';
import Logo from '../../../../../img/LogoTutu.png';
import MenuBaixo from '../../../navbar/menuBaixo';
import { useEffect, useState } from 'react';
import Options from './options';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Quiz from './quiz';


function QuizPerguntas() {

    const [perguntas, setPerguntas] = useState([])
    const [perguntas2, setPerguntas2] = useState([])
    const [perguntas3, setPerguntas3] = useState([])
    const [perguntas4, setPerguntas4] = useState([])
    const [perguntas5, setPerguntas5] = useState([])
    const [perguntas6, setPerguntas6] = useState([])
    const [perguntas7, setPerguntas7] = useState([])
    const [perguntas8, setPerguntas8] = useState([])
    const [perguntas9, setPerguntas9] = useState([])
    const [perguntas10, setPerguntas10] = useState([])



    const [descricao, setDescricao] = useState([])
    const [descricao2, setDescricao2] = useState([''])
    const [descricao3, setDescricao3] = useState([''])
    const [descricao4, setDescricao4] = useState([''])
    const [descricao5, setDescricao5] = useState([''])
    const [descricao6, setDescricao6] = useState([''])
    const [descricao7, setDescricao7] = useState([''])
    const [descricao8, setDescricao8] = useState([''])
    const [descricao9, setDescricao9] = useState([''])
    const [descricao10, setDescricao10] = useState([''])
    const token = localStorage.getItem('token')




    useEffect(() => {
        const handleFotoId = async () => {

            try {

                await fetch(`${process.env.REACT_APP_API_URL}/quiz/questions`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                        'authorization':`Bearer ${token}`
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setPerguntas(data[0].alternatives)
                        setPerguntas2(data[1].alternatives)
                        setPerguntas3(data[2].alternatives)
                        setPerguntas4(data[3].alternatives)
                        setPerguntas5(data[4].alternatives)
                        setPerguntas6(data[5].alternatives)
                        setPerguntas7(data[6].alternatives)
                        setPerguntas8(data[7].alternatives)
                        setPerguntas9(data[8].alternatives)
                        setPerguntas10(data[9].alternatives)


                        setDescricao(data[0].description)
                        setDescricao2(data[1].description)
                        setDescricao3(data[2].description)
                        setDescricao4(data[3].description)
                        setDescricao5(data[4].description)
                        setDescricao6(data[5].description)
                        setDescricao7(data[6].description)
                        setDescricao8(data[7].description)
                        setDescricao9(data[8].description)
                        setDescricao10(data[9].description)

                        console.log(data[1].description)
                        console.log(data)
                    })

            } catch (error) {
                console.log(error)



            }

        }

        handleFotoId();
    }, [])



    return (
        <div className="quiz">

          

            <Perfil />



            <Form className='div-quiz-perguntas'>

                 

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" aria-required>
                            <Accordion.Header>Pergunta - 1</Accordion.Header>
                            <Accordion.Body>
                                <p>{descricao}</p>

                                {perguntas.map((api) =>
                                    <Options
                                        perguntas={api.text}
                                        descricao={api.description}
                                        result={api.isCorrect}
                                        pontos1={api.ponto}



                                    />


                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Pergunta - 2</Accordion.Header>
                            <Accordion.Body>
                                <p>{descricao2}</p>

                                {perguntas2.map((api) =>
                                    <Options
                                        perguntas={api.text}
                                        descricao={api.description}
                                        result={api.isCorrect}
                                        pontos2={api.ponto}



                                    />


                                )}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Pergunta - 3</Accordion.Header>
                            <Accordion.Body>
                                <p>{descricao3}</p>

                                {perguntas3.map((api) =>
                                    <Options
                                        perguntas={api.text}
                                        descricao={api.description}
                                        result={api.isCorrect}
                                        pontos3={api.ponto}



                                    />


                                )}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Pergunta - 4</Accordion.Header>
                            <Accordion.Body>
                                <p>{descricao4}</p>

                                {perguntas4.map((api) =>
                                    <Options
                                        perguntas={api.text}
                                        descricao={api.description}
                                        result={api.isCorrect}
                                        pontos4={api.ponto}



                                    />


                                )}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Pergunta - 5</Accordion.Header>
                            <Accordion.Body>
                                <p>{descricao5}</p>

                                {perguntas5.map((api) =>
                                    <Options
                                        perguntas={api.text}
                                        descricao={api.description}
                                        result={api.isCorrect}
                                        pontos5={api.ponto}



                                    />


                                )}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Pergunta - 6</Accordion.Header>
                            <Accordion.Body>
                                <p>{descricao6}</p>

                                {perguntas6.map((api) =>
                                    <Options
                                        perguntas={api.text}
                                        descricao={api.description}
                                        result={api.isCorrect}
                                        pontos6={api.ponto}



                                    />


                                )}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Pergunta - 7</Accordion.Header>
                            <Accordion.Body>
                                <p>{descricao7}</p>

                                {perguntas7.map((api) =>
                                    <Options
                                        perguntas={api.text}
                                        descricao={api.description}
                                        result={api.isCorrect}
                                        pontos7={api.ponto}



                                    />


                                )}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Pergunta - 8</Accordion.Header>
                            <Accordion.Body>
                                <p>{descricao8}</p>

                                {perguntas8.map((api) =>
                                    <Options
                                        perguntas={api.text}
                                        descricao={api.description}
                                        result={api.isCorrect}
                                        pontos8={api.ponto}



                                    />


                                )}
                            </Accordion.Body>
                        </Accordion.Item>



                        <Accordion.Item eventKey="8">
                            <Accordion.Header>Pergunta - 9</Accordion.Header>
                            <Accordion.Body>
                                <p>{descricao9}</p>

                                {perguntas9.map((api) =>
                                    <Options
                                        perguntas={api.text}
                                        descricao={api.description}
                                        result={api.isCorrect}
                                        pontos9={api.ponto}



                                    />


                                )}
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="9">
                            <Accordion.Header>Pergunta - 10</Accordion.Header>
                            <Accordion.Body>
                                <p>{descricao10}</p>

                                {perguntas10.map((api) =>
                                    <Options
                                        perguntas={api.text}
                                        descricao={api.description}
                                        result={api.isCorrect}
                                        pontos10={api.ponto}


                                    />


                                )}
                            </Accordion.Body>
                        </Accordion.Item>



                    </Accordion>



                    

            </Form>
        </div >
    );
}

export default QuizPerguntas;

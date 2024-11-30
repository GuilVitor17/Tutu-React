import { Link, useNavigate } from 'react-router-dom';
import './CriarSonhos-modules.css'
import Perfil from '../../perfil/perfil';
import Logo from '../../../../img/LogoTutu.png'
import RaioNegro from '../../../../img/flash.png'
import RaiosBranco from '../../../../img/Raiobranco.png'
import MenuBaixo from '../../navbar/menuBaixo';
import Accordion from 'react-bootstrap/Accordion';
import ListSonhos from './listSonhos';
import ListSonhosMedio from './sonho-Medio/listSonhos-Medio';
import ListSonhosLongo from './sonho-Longo/listSonhos-Longo';
import Button from 'react-bootstrap/esm/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbarr from '../../navbar/navbar';



function CriarSonhos() {

    const navigate = useNavigate()


    const handleroutersonho= async () => {

        await navigate(`/perfil/createsonhospost`)

    }

    const handleroutersonhoMedio= async () => {

        await navigate(`/perfil/createsonhospostMedio`)

    }

    const handleroutersonhoLongo = async () => {

        await navigate(`/perfil/createsonhospostLongo`)

    }



    const handleRouterAulas = async () => {

        await navigate(`/perfil/aulas`)

    }



    const token = localStorage.getItem('token')
    const [dadosSonho, setDadosSonho ] = useState(['']);
    const [dadosSonhoMedio, setDadosSonhoMedio ] = useState(['']);
    const [dadosSonhoLongo, setDadosSonhoLongo ] = useState(['']);

    


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
                        console.log(data.data)
                        setDadosSonho(data.data)
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
                        console.log(data.data)
                        setDadosSonhoLongo(data.data)
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
                        console.log(data.data)
                        setDadosSonhoMedio(data.data)
                    })

            } catch (error) {

                console.log(error)

            }

        }

        loadTarefas();

    }, [])









    return (
        <div className="create-sonhos">

     <Navbarr />
         

            <Perfil />

            <div className='div-sonhos'>


                <Accordion defaultActiveKey="0">
                    <Accordion.Item className='prazoSonho' eventKey="0">
                        <Accordion.Header> <b className='prazo'>Curto Prazo</b> <div className='raios'><img src={RaiosBranco} /> <img src={RaiosBranco} /> <img src={RaiosBranco} /></div>  </Accordion.Header>
                        <Accordion.Body>

                            <div className='list-sonhos'>
                         <div className='div-sonho-id'>

                            {dadosSonho.map((api) => 

                                <ListSonhos
                                nomeSonho={api.nameSonho}
                                descricaoSonho={api.descricaoSonho}
                                Id={api._id}
                                ponto={api.ponto}
                                />

                             )}
                            </div>


                                <div className="list-sonhos-get">

                                    <div>
                                        <Button className='add-sonho' onClick={handleroutersonho} variant="warning"> <b> Adicionar Sonho </b>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                        </svg></Button>{' '}

                                    </div>

                                </div>

                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='prazoSonho' eventKey="1">
                        <Accordion.Header> <b className='prazo'>Medio Prazo</b> <div className='raios'> <img src={RaiosBranco} /> <img src={RaiosBranco} /> <img src={RaioNegro} /></div></Accordion.Header>
                        <Accordion.Body>

                        <div className='list-sonhos'>
                         <div className='div-sonho-id'>

                            {dadosSonhoMedio.map((api) => 

                                <ListSonhosMedio
                                nomeSonho={api.nameSonho}
                                descricaoSonho={api.descricaoSonho}
                                Id={api._id}
                                ponto={api.ponto}

                                />

                             )}
                            </div>


                                <div className="list-sonhos-get">

                                    <div>
                                        <Button className='add-sonho' onClick={handleroutersonhoMedio} variant="warning"> <b> Adicionar Sonho </b>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                        </svg></Button>{' '}

                                    </div>

                                </div>

                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='prazoSonho' eventKey="2">
                        <Accordion.Header> <b className='prazo'>Longo Prazo</b> <div className='raios'><img src={RaiosBranco} /> <img src={RaioNegro} /> <img src={RaioNegro} /></div></Accordion.Header>
                        <Accordion.Body>

                        <div className='list-sonhos'>
                         <div className='div-sonho-id'>

                            {dadosSonhoLongo.map((api) => 

                                <ListSonhosLongo
                                nomeSonho={api.nameSonho}
                                descricaoSonho={api.descricaoSonho}
                                Id={api._id}
                                ponto={api.ponto}

                                />

                             )}
                            </div>


                                <div className="list-sonhos-get">

                                    <div>
                                        <Button className='add-sonho' onClick={handleroutersonhoLongo} variant="warning"> <b> Adicionar Sonho </b>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                        </svg></Button>{' '}

                                    </div>

                                </div>

                            </div>


                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


            </div>

            


        </div>
    );
}

export default CriarSonhos;

import { Link } from 'react-router-dom';
import './aulas-modules.css'
import Logo from '../../../../img/LogoTutu.png'
import Perfil from '../../perfil/perfil';
import MenuBaixo from '../../navbar/menuBaixo';
import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';


function ListAulas({ titulo, aula }) {


    const token = localStorage.getItem('token')
    const [cursoAula, setIdCursoAula] = useState([])
    const iduser = localStorage.getItem('IdUser')



    useEffect(() => {
        const handleFotoId = async () => {

            try {

                await fetch(`${process.env.REACT_APP_API_URL}/curso`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                        'authorization': `Bearer ${token}`
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setIdCursoAula(data)
                    })

            } catch (error) {
                console.log(error)



            }

        }

        handleFotoId();
    }, [])





    return (
        <>



            <Accordion.Item>
                <Accordion.Header>{aula}</Accordion.Header>
                <Accordion.Body>

                    <iframe src={titulo} width="300" height="250">
                        <p>Your browser does not support iframes.</p>
                    </iframe>

                </Accordion.Body>
            </Accordion.Item>




        </>
    );
}

export default ListAulas;

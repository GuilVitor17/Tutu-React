import { Link } from 'react-router-dom';
import './aulas-modules.css'
import Logo from '../../../../img/LogoTutu.png'
import Perfil from '../../perfil/perfil';
import MenuBaixo from '../../navbar/menuBaixo';
import { useEffect, useState } from 'react';
import ListAulas from './list';
import Accordion from 'react-bootstrap/Accordion';




function Aulas() {


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
        <div className="aulas">

            <div className='barra-fixed'>

                <div className='barra-alta-home'>
                    <div className='Logo-alta'><img src={Logo} /></div>
                    <Link to='/home'> <div className='Logo-volta'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></div></Link>
                </div>
            </div>

            <Perfil />

            <div className='menu-aulas'>
                <b>Minhas Aulas</b>

                <div className='aulas-container'>

                <Accordion defaultActiveKey="0">

                    {cursoAula.map((api) => 

                        <ListAulas 

                        titulo={api.titulo}
                        aula={api.aula}
                        
                        />

                    )}
                    </Accordion>
                    




                </div>
            </div>

            <MenuBaixo />


        </div>
    );
}

export default Aulas;

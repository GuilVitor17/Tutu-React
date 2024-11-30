import { Link } from 'react-router-dom';
import './aulas-modules.css'
import Logo from '../../../../img/LogoTutu.png'
import Perfil from '../../perfil/perfil';
import MenuBaixo from '../../navbar/menuBaixo';
import { useEffect, useState } from 'react';
import ListAulas from './list';
import Accordion from 'react-bootstrap/Accordion';
import Navbarr from '../../navbar/navbar';




function Aulas() {


    const token = localStorage.getItem('token')
    const iduser = localStorage.getItem('IdUser')

    const cursoAula = [
        {
            titulo:"Aula 1",
            aula:"https://youtu.be/iF2MdbrTiBM?si=xxsaZYYCoZwj3d52"
        },
        {
            titulo:"Aula 2",
            aula:"https://www.youtube.com/watch?v=XC3ahd6Di3M&list=RDMMXC3ahd6Di3M&start_radio=1"
        },
        {
            titulo:"Aula 3",
            aula:"https://youtu.be/iF2MdbrTiBM?si=xxsaZYYCoZwj3d52"
        }
        ,{
            titulo:"Aula 4",
            aula:"https://youtu.be/iF2MdbrTiBM?si=xxsaZYYCoZwj3d52"
        },
        {
            titulo:"Aula 5",
            aula:"https://youtu.be/iF2MdbrTiBM?si=xxsaZYYCoZwj3d52"
        }
    ]





    return (
        <div className="aulas">
     <Navbarr />


          
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

            


        </div>
    );
}

export default Aulas;

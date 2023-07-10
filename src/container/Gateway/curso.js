import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';
import './gateway-modules.css'
import Button from 'react-bootstrap/Button';
import ImgCurso from '../../../src/img/curso.png'
import Carousel from 'react-bootstrap/Carousel';




function GatewayCurso() {

    const token = localStorage.getItem('token')

    const [paid, setPaid] = useState(false)
    const [loading, setLoading] = useState(false)


    const [comprado, setComprado] = useState('')
    const iduser = localStorage.getItem('IdUser')
    const navigate = useNavigate()



    useEffect(() => {
        const handleFotoId = async () => {

            try {

                await fetch(`${process.env.REACT_APP_API_URL}/curso/rotapaga`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                        'authorization':`Bearer ${token}`
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setComprado(data[0].descricao)
                    })

            } catch (error) {
                console.log(error)



            }

        }

        handleFotoId();
    }, [])



    const handleclick = async () => {

        try {

            localStorage.setItem('curso', 'notApovade')

            const verify = await localStorage.getItem('curso') 

            if(verify === 'notApovade'){

                 navigate(`/perfil/curso/aulas/check`)
             
            } else{

                navigate(`/perfil/aulaspagas`)


            }

            await fetch(`${process.env.REACT_APP_API_URL}/curso/rotapaga`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'aplication/json',
                    'authorization':`Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then( async data => {
                    console.log(data)
                    setComprado(data[0].descricao)

                    if(comprado === 'COMPRADO'){
                        navigate(`/perfil/aulaspagas`)
                    } else{
                        navigate(`/perfil/curso/aulas/check`)

                    }

                    if (comprado === data[0].descricao) {

                        await localStorage.setItem('curso', 'Aprovade')

                        return navigate(`/perfil/aulaspagas`)


                    } 

                    

                   
                })

        } catch (error) {
            console.log(error)



        }

    }

    



    return (
        <>
            <div className="curso">

                <Carousel variant="dark">
                   <Carousel.Item>
                   <Link className='link-img' onClick={handleclick}>
                   <b className='comprado'>{comprado}</b>
                     <img
                            className="d-block w-100"
                            src={ImgCurso}
                            alt="First slide"
                        /></Link>

                    </Carousel.Item>

                </Carousel>


               




            </div>
        </>
    );
}

export default GatewayCurso;

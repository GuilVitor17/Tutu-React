import { Link } from 'react-router-dom';
import './perfil-modules.css'
import LogoAmrelo from '../../../img/LogoTutu.png'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import MenuBaixo from '../navbar/menuBaixo';
import Navbarr from '../navbar/navbar';



function PerfilId() {

   
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [foto, setFoto] = useState('')
    const [idade, setIdade] = useState('')
    const [cidade, setCidade] = useState('')
    const [sexo, setSexo] = useState('')
    const [telefone, setTelefone] = useState('')
    const token = localStorage.getItem('token')
    const IdDados = localStorage.getItem('IdDados')


    useEffect(() =>{ 
    const handleDadosId = async () =>{

        try {

             await fetch(`${process.env.REACT_APP_API_URL}/Dados/${IdDados}`,{
                method:'GET',
                headers:{
                    'Content-Type':'aplication/json',
                    'authorization':`Bearer ${token}`
                }
             })
             .then(resp => resp.json())
             .then(data =>{
                setName(data.Dadoss.name)
                setEmail(data.Dadoss.user[0].email)
                setSexo(data.Dadoss.sexo)
                setTelefone(data.Dadoss.telefone)
                setIdade(data.Dadoss.idade)
                setCidade(data.Dadoss.cidade)
                console.log(data)
             })

        } catch (error) {
            console.log(error)


            
        }
        
    }

    handleDadosId();
},[])


useEffect(() =>{ 
    const handleFotoId = async () =>{

        try {

             await fetch(`${process.env.REACT_APP_API_URL}/upload/post`,{
                method:'GET',
                headers:{
                    'Content-Type':'aplication/json',
                    'authorization':`Bearer ${token}`
                }
             })
             .then(resp => resp.json())
             .then(data =>{
                setFoto(data.posts[0].url)
                console.log(data)

             })

        } catch (error) {
            console.log(error)


            
        }
        
    }

    handleFotoId();
},[])



    return (
        <div className="perfilId">
     <Navbarr />


            <div className='dadosUser'>
                <ListGroup as="ol">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">E-mail</div>
                           {email}
                        </div>

                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Nome</div>
                            {name}
                        </div>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Sexo</div>
                            {sexo}
                            
                        </div>

                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Idade</div>
                            {idade}
                            
                        </div>

                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Telefone</div>
                            {telefone}
                            
                        </div>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Cidade</div>
                            {cidade}
                           
                        </div>

                    </ListGroup.Item>

                </ListGroup>

            </div>



            

        </div>
    );
}

export default PerfilId;

import './config-modules.css'
import MenuBaixo from '../../container/home/navbar/menuBaixo';
import Navbarr from '../../container/home/navbar/navbar';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../img/LogoTutu.png'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';



function ConfigPage() {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const navigate = useNavigate();

  const IdUser = localStorage.getItem('IdUser');


  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);

  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);


  const handlenewpassword = async () =>{
   
   await localStorage.removeItem('token')
   navigate(`/loginforgot`)

  }

  const handleExit = async () =>{
   
    await localStorage.removeItem('token')
    navigate(`/login`)
 
   }


  return (
    <div className="config">
     <Navbarr />

     

      

      <div className='list-config'>

        <ListGroup>
          <Link className='link-config' to={`/perfil/trofeuspontos`}> <ListGroup.Item>Meus Pontos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16">
            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
          </svg></ListGroup.Item></Link>
          <Link className='link-config' to={`/perfil/${IdUser}/edit`}><ListGroup.Item>Editar Dados <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
          </svg></ListGroup.Item></Link>
          {/* <Link className='link-config' to={`/loginforgot`} onClick={handlenewpassword}><ListGroup.Item>Editar Senha <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg></ListGroup.Item></Link> */}
          <Link className='link-config' onClick={handleShow2}><ListGroup.Item variant="primary" onClick={handleShow2}>Id de usuario <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-vcard-fill" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8Zm1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5ZM7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
          </svg></ListGroup.Item></Link>
          <Link className='link-config' onClick={handleShow3}><ListGroup.Item>Ajuda <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg></ListGroup.Item></Link>
          <ListGroup.Item variant="primary" onClick={handleShow}>Sair <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg></ListGroup.Item>
        </ListGroup>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title> <b className='title-config'>Deseja desconectar da sua Conta?</b> </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Button onClick={handleExit} variant="danger">Confirmar</Button>{' '}

          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>

        <Modal
          show={show2}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title><b className='title-config'>Não Compartilhe esse dados!</b> </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <h4>ID - {IdUser}</h4>

          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>


        <Modal
          show={show3}
          onHide={handleClose3}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title><b className='title-config'>Ajuda!</b> </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Accordion defaultActiveKey="0">
      
      <Accordion.Item eventKey="1">
        <Accordion.Header>Ainda não consigo fazer login</Accordion.Header>
        <Accordion.Body>

          Criar uma nova conta
          se ainda não conseguir recuperar sua conta, voçê poderá <Link to={`/logincreate`}>criar uma nova conta do TUTU</Link>
         
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Evitar serviços de recuperação de senha</Accordion.Header>
        <Accordion.Body>

         Para sua segurança, não é possivel ligar para a TUTU para receber ajuda com login na sua conta.
         Não trabalhamos com nenhum serviço que alegue fornecer suporte á conta ou senha.
         nunca forneça sua senha ou codigos de verificação.
         
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Quem pode ver seus dados</Accordion.Header>
        <Accordion.Body>

        As informaçoes da sua conta são particulares.
         
        </Accordion.Body>
      </Accordion.Item>


    </Accordion>

    

          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>


      </div>

      




    </div>
  );
}

export default ConfigPage;

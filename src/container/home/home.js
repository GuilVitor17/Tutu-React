import GatewayCurso from '../Gateway/curso';
import Sonhos from './Sonhos/sonhos';
import './home-modules.css'
import MenuBaixo from './navbar/menuBaixo';
import Navbarr from './navbar/navbar';
import Perfil from './perfil/perfil';


function HomePage() {
  return (
    <div className="homepage">
     
     <Navbarr />

     <div>

     

     <Perfil />

     <div className='pagamento'>
      <GatewayCurso />
     </div>

     <Sonhos />
     
     {/*  */}

     </div>




    </div>
  );
}

export default HomePage;

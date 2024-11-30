import { Routes, Route, Link } from 'react-router-dom'
import './router-modules.css'
import Loading from '../Loading/loading';
import Login from '../container/login/login';
import HomePage from '../container/home/home';
import LoginCreate from '../container/create/create';
import LoginForgot from '../container/forgot/forgot-password';
import LoginNewPassword from '../container/updatepassword/newPassword';
import PerfilId from '../container/home/perfil/perfilId';
import PerfilEdit from '../container/home/perfil/perfilEdit';
import PerfilCreate from '../container/home/perfil/perfiCreate';
import PerfilFoto from '../container/home/perfil/upload';
import Aulas from '../container/home/Sonhos/aulas/aulas';
import Tarefas from '../container/home/Sonhos/tarefas/tarefas';
import Quiz from '../container/home/Sonhos/tarefas/Quiz/quiz';
import QuizPerguntas from '../container/home/Sonhos/tarefas/Quiz/perguntas';
import Game from '../container/home/Sonhos/tarefas/Game/game';
import Anotacoes from '../container/home/Sonhos/tarefas/Anotacoes/anotacoes';
import CriarSonhos from '../container/home/Sonhos/CriarSonho/criarSonho';

import CreateSonhos from '../container/home/Sonhos/CriarSonho/create';
import CreateSonhosMedio from '../container/home/Sonhos/CriarSonho/sonho-Medio/createMedio';
import CreateSonhosLongo from '../container/home/Sonhos/CriarSonho/sonho-Longo/createLongo';

import CreateFormSonhos from '../container/home/Sonhos/CriarSonho/form-create';
import CreateFormSonhosMedio from '../container/home/Sonhos/CriarSonho/sonho-Medio/form-create-Medio';
import CreateFormSonhosLongo from '../container/home/Sonhos/CriarSonho/sonho-Longo/form-create-Longo';

import SonhosId from '../container/home/Sonhos/CriarSonho/sonhoId';
import SonhosIdMedio from '../container/home/Sonhos/CriarSonho/sonho-Medio/sonhoId-Medio';
import SonhosIdLongo from '../container/home/Sonhos/CriarSonho/sonho-Longo/sonhoId-Longo';
import ConfigPage from '../container/config-app/config';
import AnotacoesCreate from '../container/home/Sonhos/tarefas/Anotacoes/anotacoesCraete';
import Trofeus from '../container/home/trofeus/trofeus';
import TrofeusPontos from '../container/home/trofeus/pontos';
import Gateway from '../container/Gateway/Gateway';
import AulasPagas from '../container/home/Sonhos/aulas/aulasPagas';
import AulasPagasPreparativos from '../container/home/Sonhos/aulas/preparativos';
import ConfirmSonho from '../container/Gateway/confirm-curso';
import ConfirmSonhoSuccess from '../container/Gateway/success';
import ConfirmSonhoCancel from '../container/Gateway/cancel';

    function Router() {

        const url = process.env.REACT_APP_ROUTER_PRIVADE
        const UserAutheticate = localStorage.getItem("token");



        return (
    <div className="router">

        


            <Routes>

                <Route path='/' element={<Loading />} />
                <Route path='/login' element={<Login />} />
                {UserAutheticate &&<Route path='/home' element={<HomePage />} />}
                <Route path='/logincreate' element={<LoginCreate />} />
                <Route path='/loginforgot' element={<LoginForgot />} />
                <Route path='/loginNewpassword' element={<LoginNewPassword />} />
                {UserAutheticate && <Route path='/perfil/:id' element={<PerfilId />} />}
                {UserAutheticate &&<Route path='/perfil/:id/edit' element={<PerfilEdit />} />}
                {UserAutheticate &&<Route path='/perfil/create' element={<PerfilCreate />} />}
                {/* {UserAutheticate &&<Route path='/perfil/upload' element={<PerfilFoto />} />}   */}
                {UserAutheticate &&<Route path={`/perfil/aulas/preparativo/:id`} element={<Aulas />} />}
                {UserAutheticate &&<Route path='/perfil/tarefa' element={<Tarefas />} />}
                {/* {UserAutheticate &&<Route path='/perfil/quiz' element={<Quiz />} />} */}
                {/* {UserAutheticate &&<Route path='/perfil/quizperguntas' element={<QuizPerguntas />} />} */}
                {UserAutheticate &&<Route path='/perfil/game' element={<Game />} />}
                {UserAutheticate &&<Route path='/perfil/anotacoes' element={<Anotacoes />} />}
                {UserAutheticate &&<Route path='/perfil/anotacoescreate' element={<AnotacoesCreate />} />}
                {UserAutheticate &&<Route path='/perfil/createsonhos' element={<CriarSonhos />} />}
                {UserAutheticate &&<Route path='/perfil/createsonhospost' element={<CreateSonhos />} />}
                {UserAutheticate &&<Route path='/perfil/createsonhospostMedio' element={<CreateSonhosMedio />} />}
                {UserAutheticate &&<Route path='/perfil/createsonhospostLongo' element={<CreateSonhosLongo />} />}

                {UserAutheticate &&<Route path='/perfil/createsonhospostForm' element={<CreateFormSonhos />} />}
                {UserAutheticate &&<Route path='/perfil/createsonhospostFormMedio' element={<CreateFormSonhosMedio />} />}
                {UserAutheticate &&<Route path='/perfil/createsonhospostFormLongo' element={<CreateFormSonhosLongo />} />}


                {UserAutheticate &&<Route path='/perfil/createsonhospostForm/:id' element={<SonhosId />} />}
                {UserAutheticate &&<Route path='/perfil/createsonhospostFormMedio/:id' element={<SonhosIdMedio />} />}
                {UserAutheticate &&<Route path='/perfil/createsonhospostFormLongo/:id' element={<SonhosIdLongo />} />}


                {UserAutheticate &&<Route path='/perfil/config/' element={<ConfigPage />} />}
                {UserAutheticate &&<Route path='/perfil/trofeus' element={<Trofeus />} />}
                {UserAutheticate &&<Route path='/perfil/trofeuspontos' element={<TrofeusPontos />} />}
                {UserAutheticate &&<Route path='/perfil/Gateway' element={<Gateway />} />}


                {UserAutheticate &&<Route path='/perfil/aulaspagas' element={<AulasPagas />} />}
                {UserAutheticate &&<Route path={`/perfil/aulaspagas/preparativo`} element={<AulasPagasPreparativos />} />}
                {UserAutheticate &&<Route path={`/perfil/curso/aulas/check`} element={<ConfirmSonho />} />}

                {UserAutheticate &&<Route path={`/perfil/curso/aulas/check/success`} element={<ConfirmSonhoSuccess />} />}
                {UserAutheticate &&<Route path={`/perfil/curso/aulas/check/cancel`} element={<ConfirmSonhoCancel />} />}



            </Routes>



        </div>
    );
}

export default Router;

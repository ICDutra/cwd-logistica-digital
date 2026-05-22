import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// Mudei aqui: tirei o "/componentes" porque na sua foto o login.js está fora da pasta!
import LoginSimulado from './login'; 

import FirstAccess from './pages/FirstAccess';
import SubmitWork from './pages/cadastrarformulario/SubmitWork';
import ReviewQueue from './pages/ReviewQueue';
import Faculties from './pages/admin/Faculties';
import Estado from './pages/admin/Estado'; // Utiliza o supabase para obter os dados do estado do sistema
import MapPage from './mapabrasil/MapPage';
import DetailsPage from './mapabrasil/DetailsPage';
import MapPageBD from './mapabrasilargentinabd/MapPageBD';
import DetailsPageBD from './mapabrasilargentinabd/DetailsPageBD';
import SubmitWorkTela02 from './pages/cadastrarformulario/SubmitWorkTela02';
import SubmitWorkTela03 from './pages/cadastrarformulario/SubmitWorkTela03';
import CertificateContainer from './pages/certificado/CertificateContainer';
import MapaUnidadesFaculdade from './unidadesfaculdade/MapaUnidadesFaculdade';
import ConsultaUnidade from './unidadesfaculdade/ConsultaUnidade';
import Dashboard from './pages/dashboard/Dashboard';
import Oficina from './pages/Oficina';
import Login from './login';

export const router = createBrowserRouter([
  { path: '/login', element: <Login/> },
  { path: '/projetoacervodigitalreactjs', element:  <App/> },
  {
    path: '/', element: <App/>, children: [
      { index: true, element: <Dashboard/> },

      { path: 'first-access', element:  <FirstAccess/> },
      { path: 'submit', element: <SubmitWork/> },

      { path: 'SubmitWorkTela02', element: <SubmitWorkTela02/> },
      { path: 'SubmitWorkTela03', element: <SubmitWorkTela03/> },
      

      { path: 'review', element: <ReviewQueue/> },
      { path: 'certificate', element: <CertificateContainer/> },

      { path: 'admin/faculties', element:  <Faculties/> },
      { path: 'admin/estado', element:  <Estado/> },

      { path: 'mapabrasil', element:  <MapPage/> },
      { path: "/details/:id", element: <DetailsPage />},
      { path: 'mapabrasilbd', element:  <MapPageBD/> },
      { path: "/detailsbd/:id", element: <DetailsPageBD />},

      { path: "/unidadesfaculdade", element: <MapaUnidadesFaculdade />},
      { path: "/detalhesunidade/:id", element: <ConsultaUnidade />},

      { path: "/oficina/", element: <Oficina />},

    ]
  },
  { path: '/login', element: <LoginSimulado /> }
]);
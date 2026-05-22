import React from 'react';
import Resume from './componentes/Resume';
import Dashboard from './componentes/Dashboard';
import Form from './componentes/Form';
import Grid from './componentes/Grid';

const App = () => {
  // Configuração das cores para logística moderna
  const colors = {
    bg: '#1a1a1a',        // Fundo grafite
    card: '#ffffff',      // Fundo branco dos cards
    textDark: '#1a1a1a',  // Texto preto dentro dos cards
    primary: '#ed1c24'    // Vermelho da CWD
  };

  return (
    <>
      <h1>Acervo Digital - Bem-vindo! </h1>
      {/* A NavBar é necessária para que a barra de navegação seja exibida em todas as páginas da aplicação, permitindo que os usuários naveguem facilmente entre as diferentes seções do site. */}
      {/* Sem a NavBar, os usuários teriam dificuldade em acessar outras páginas da aplicação, o que poderia resultar em uma experiência de usuário ruim e dificultar a navegação. */}
      {/* A NavBar é uma parte fundamental do layout da aplicação, proporcionando uma maneira intuitiva e acessível para os usuários explorarem o conteúdo do site. */}
      <NavBar />
      {/* Resto do conteúdo da página */}
      {/* O Outlet é onde os componentes filhos serão renderizados */}
      {/* Ele é necessário para que as rotas filhas sejam exibidas dentro do layout do App */}
      {/* Sem o Outlet, as rotas filhas não seriam renderizadas, e você não veria o conteúdo das páginas correspondentes às rotas */}
      {/* O Outlet é uma parte fundamental do sistema de roteamento do React Router, permitindo que você crie layouts reutilizáveis e organize suas rotas de forma hierárquica */}
      {/* Ele é especialmente útil quando você tem um layout comum para várias páginas, como um cabeçalho ou uma barra de navegação, e deseja renderizar o conteúdo específico de cada página dentro desse layout */}
      {/* Em resumo, o Outlet é essencial para que as rotas filhas sejam renderizadas corretamente dentro do layout do App, garantindo que o conteúdo das páginas seja exibido conforme esperado. */}
      <Outlet />
      {/* Exemplo de exibição dos dados obtidos do Supabase */}

      
      {/* HEADER - Incluindo o ícone de caminhão no lugar da foto */}
      <div style={{ textAlign: 'center', margin: '20px 0', color: 'white' }}>
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>🚚</div>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0' }}>CWD LOGÍSTICA DIGITAL</h1>
        <p style={{ color: '#bbb' }}>Controle Financeiro e Operacional</p>
      </div>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* RESUME - Onde aparece o saldo */}
        <div style={{ color: colors.textDark }}>
           <Resume />
        </div>
        
        {/* DASHBOARD - Fundo branco para destacar o gráfico */}
        <div style={{ backgroundColor: colors.card, padding: '25px', borderRadius: '15px', margin: '30px 0', boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '10px', color: colors.textDark }}>Desempenho Operacional</h2>
          <div style={{ height: '300px', width: '100%' }}>
            <Dashboard />
          </div>
        </div>
        
        {/* FORMULÁRIO E GRID - Corrigidos para fundo branco e texto preto */}
        <div style={{ backgroundColor: colors.card, padding: '25px', borderRadius: '15px', marginTop: '30px', color: colors.textDark }}>
          <Form />
          <Grid />
        </div>
      </div>
    </div>
  );
};

export default App;
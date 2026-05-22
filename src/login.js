import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true); // Controla se mostra Login ou Cadastro
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleAcao = (e) => {
        e.preventDefault();
        if (email !== "" && senha !== "") {
            // Se for login ou cadastro, ele entra no dashboard do mesmo jeito
            navigate('/dashboard'); 
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '75vh', fontFamily: 'sans-serif' }}>
            <div style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                
                {/* TÍTULO DINÂMICO */}
                <h2 style={{ textAlign: 'center', color: '#333' }}>
                    {isLogin ? 'CWD Logística - Login' : 'Criar Nova Conta'}
                </h2>

                <form onSubmit={handleAcao} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '250px' }}>
                    
                    {/* CAMPO NOME (Só aparece se for Cadastro) */}
                    {!isLogin && (
                        <input type="text" placeholder="Nome Completo" style={{ padding: '10px' }} required />
                    )}

                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        style={{ padding: '10px' }} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        style={{ padding: '10px' }} 
                        onChange={(e) => setSenha(e.target.value)} 
                        required 
                    />

                    <button type="submit" style={{ padding: '10px', backgroundColor: isLogin ? '#28a745' : '#007bff', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
                        {isLogin ? 'Entrar' : 'Finalizar Cadastro'}
                    </button>
                </form>
                
                {/* BOTÃO PARA TROCAR ENTRE LOGIN E CADASTRO */}
                <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
                    <span>{isLogin ? 'Não tem uma conta?' : 'Já possui conta?'} </span>
                    <button 
                        onClick={() => setIsLogin(!isLogin)}
                        style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}
                    >
                        {isLogin ? 'Cadastre-se aqui' : 'Faça Login'}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;
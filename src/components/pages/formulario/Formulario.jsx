import React from 'react';
import { useState } from 'react';
import './Formulario.css';

export const Formulario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [atividade, setAtividade] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            nome,
            email,
            telefone,
            cidade,
            estado,
            empresa,
            atividade,
            senha,
            confirmarSenha,
        };

        try {
            console.log('Dados a serem enviados do formulário para :', formData); // Log dos dados antes do envio
            const response = await fetch('http://localhost:5000/formulario/enviar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Dados enviados com sucesso
                console.log('Dados enviados com sucesso.');
                setNome('');
                setEmail('');
                setTelefone('');
                setCidade('');
                setEstado('');
                setEmpresa('');
                setAtividade('');
                setSenha('');
                setConfirmarSenha('');

            } else {
                // Ocorreu um erro no servidor
                console.error('Erro no servidor ao processar a requisição.');
            }
        } catch (error) {
            // Ocorreu um erro na requisição
            console.error('Erro ao enviar os dados:', error);
        }
    };
    return (
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend><b>Tenha prévia de preços e acesso ao blog da plataforma</b></legend>
                    <br />
                    <div className='inputBox'>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            className="inputUser"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            required
                        />
                        <label htmlFor='nome' className='labelInput'>Nome</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="inputUser"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                        <label htmlFor='email' className='labelInput'>Email</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input
                            type="password"
                            name="senha"
                            id="senha"
                            className="inputUser"
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                            required
                        />
                        <label htmlFor='senha' className='labelInput'>Senha</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input
                            type="password"
                            name="confirmarSenha"
                            id="confirmarSenha"
                            className="inputUser"
                            value={confirmarSenha}
                            onChange={(event) => setConfirmarSenha(event.target.value)}
                            required
                        />
                        <label htmlFor='confirmarSenha' className='labelInput'>Confirmar Senha</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input
                            type="text"
                            name="telefone"
                            id="telefone"
                            className="inputUser"
                            value={telefone}
                            onChange={(event) => setTelefone(event.target.value)}
                            required
                        />
                        <label htmlFor='telefone' className='labelInput'>Telefone</label>
                    </div>
                    <br></br>
                    <br></br>
                    <p>Informe os dados da empresa</p>
                    <br></br>
                    <div className='inputBox'>
                        <input
                            type="text"
                            name="cidade"
                            id="cidade"
                            className="inputUser"
                            value={cidade}
                            onChange={(event) => setCidade(event.target.value)}
                            required
                        />
                        <label htmlFor='cidade' className='labelInput'>Cidade</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input
                            type="text"
                            name="estado"
                            id="estado"
                            className="inputUser"
                            value={estado}
                            onChange={(event) => setEstado(event.target.value)}
                            required
                        />
                        <label htmlFor='estado' className='labelInput'>Estado</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input
                            type="text"
                            name="empresa"
                            id="empresa"
                            className="inputUser"
                            value={empresa}
                            onChange={(event) => setEmpresa(event.target.value)}
                            required
                        />
                        <label htmlFor='nome_empresa' className='labelInput'>Empresa</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input
                            type="text"
                            name="atividade_empresa"
                            id="atividade_empresa"
                            className="inputUser"
                            value={atividade}
                            onChange={(event) => setAtividade(event.target.value)}
                            required
                        />
                        <label htmlFor='atividade_empresa' className='labelInput'>Atividade</label>
                    </div>
                    <br></br>
                    <input type='submit' name='submit' id='submit' />
                </fieldset>

            </form>
        </div>
    )
}
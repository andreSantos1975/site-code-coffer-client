
import React, { useRef, useEffect } from 'react';
import './Prices_Form.css';

export const Prices_Form = () => {


    return (
        <div className='box'>
            <form  action=''>
                <fieldset>
                    <legend><b>Formulário prévia de preços</b></legend>
                    <br />
                    <div className='inputBox'>
                        <input type='text' name='nome' id='nome' className='inputUser' required />
                        <label htmlFor='nome' className='labelInput'>Nome</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input type='email' name='email' id='email' className='inputUser' required />
                        <label htmlFor='email' className='labelInput'>Email</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input type='tel' name='telefone' id='telefone' className='inputUser' required />
                        <label htmlFor='telefone' className='labelInput'>Telefone</label>
                    </div>
                    <br></br>
                    <br></br>
                    <p>Informe os dados da empresa</p>
                    <br></br>
                    <div className='inputBox'>
                        <input type='text' name='cidade' id='cidade' className='inputUser' required />
                        <label htmlFor='cidade' className='labelInput'>Cidade</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input type='text' name='estado' id='estado' className='inputUser' required />
                        <label htmlFor='estado' className='labelInput'>Estado</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input type='text' name='nome_empresa' id='nome_empresa' className='inputUser' required />
                        <label htmlFor='nome_empresa' className='labelInput'>Empresa</label>
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <input type='text' name='atividade_empresa' id='atividade_empresa' className='inputUser' required />
                        <label htmlFor='atividade_empresa' className='labelInput'>Atividade</label>
                    </div>
                    <br></br>
                    <input type='submit' name='submit' id='submit' />
                </fieldset>
            </form>
        </div>
    )
}
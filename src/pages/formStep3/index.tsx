import {useNavigate} from 'react-router-dom'

import { Theme } from "../../components/Theme";

import * as C from "./styles";
import {useForm,FormActions} from '../../contexts/FormComtext'
import { ChangeEvent ,useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FormStep3 = () => {

    const navigate= useNavigate();

    useEffect(() => {
      if (state.name === "") {
        navigate("/");
      } else {
        dispatch({
          type: FormActions.setCurrentStep,
          payload: 3,
        });
      }
    }, []);

    const {state,dispatch}= useForm();

    const handleNextStep =()=>{
      if(state.email !== '' && state.github !== ''){
     alert("Cadastro Finalizado com Sucesso")
     console.log(state, "state")
    }else{
      alert("Preencha todos dos campos")
    }

    }

    const handleEmailChange =(e: ChangeEvent<HTMLInputElement>)=>{
      dispatch({
        type:FormActions.setEmail,
        payload:e.target.value
      })
    }
    const handleGithubChange =(e: ChangeEvent<HTMLInputElement>)=>{
      dispatch({
        type:FormActions.setGithub,
        payload:e.target.value
      })
    }
  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3 </p> 
        <h1>Muito bem {state.name} como podemos te achar?</h1>
        <p> Preencha os campos de contacto, por favor</p>
        <hr/>

        <label>
            Qual o seu e-mail
            <input 
                type="email"
                autoFocus
                value={state.email}
                onChange={handleEmailChange}

            />
        </label>
        <label>
            Qual o seu Github
            <input 
                type="url"
                autoFocus
                value={state.github}
                onChange={handleGithubChange}

            />
        </label>
        <Link to='/step2' className="BotaoVoltar"> Voltar</Link>
        <button onClick={handleNextStep}> Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};

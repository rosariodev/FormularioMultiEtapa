import {useNavigate} from 'react-router-dom'

import { Theme } from "../../components/Theme";

import * as C from "./styles";
import {useForm,FormActions} from '../../contexts/FormComtext'
import { ChangeEvent ,useEffect } from 'react';

export const FormStep1 = () => {

    const navigate= useNavigate();

    useEffect(()=>{
              dispatch({
                type: FormActions.setCurrentStep,
                payload:1
              })

    },[])

    const {state,dispatch}= useForm();

    const handleNextStep =()=>{
      if(state.name !=''){      
      try {
             
                navigate("/step2")
                
            } catch (error) {
                navigate("/error")
            }
          }else{
            alert("Preencha o seu nome")
          }

    }

    const handleChange =(e: ChangeEvent<HTMLInputElement>)=>{
      dispatch({
        type:FormActions.setName,
        payload:e.target.value
      })
    }
  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3 </p> 
        <h1>Vamos comecar com o seu nome</h1>
        <p> Preencha o campo abaixo com o seu nome</p>
        <hr/>

        <label>
            Seu nome completo
            <input 
                type="text"
                autoFocus
                value={state.name}
                onChange={handleChange}

            />
        </label>

        <button onClick={handleNextStep}> Proximo </button>
      </C.Container>
    </Theme>
  );
};

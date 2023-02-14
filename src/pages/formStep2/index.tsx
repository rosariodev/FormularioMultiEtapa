import { useNavigate ,Link} from "react-router-dom";

import { Theme } from "../../components/Theme";

import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormComtext";
import { ChangeEvent, useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const { state, dispatch } = useForm();
  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };
  const handleNextStep = () => {
    if (state.name != "") {
      try {
        navigate("/step3");
      } catch (error) {
        navigate("/error");
      }
    } else {
      alert("Preencha o seu nome");
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/2 </p>
        <h1>{state.name} O que melhor te descreve?</h1>
        <p>
          {" "}
          Escolha afirmacao que melhor descreve a tua situacao profissional.
        </p>
        <hr />
        <SelectOption
          title="Sou Iniciante "
          description="Programo a menos dois anos"
          icon="*.*"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou Programador "
          description="Programo a mais de dois anos"
          icon="\|*\|"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        <Link to='/' className="BotaoVoltar"> Voltar</Link>
        <button onClick={handleNextStep}> Proximo </button>
      </C.Container>
    </Theme>
  );
};

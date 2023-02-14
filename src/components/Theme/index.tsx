import { ReactNode } from "react";
import {Header} from '../Header/index'
import { SidebarItem } from "../sideBarItem";
import * as C from "./styles";
import {useForm} from '../../contexts/FormComtext'

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {

  const{state}=useForm()

  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>
            <SidebarItem 
              title="Personal"
              descripton="Se Identifique"
              icon="profile"
              path="/"
              active={state.currentStep==1}
            />
              <SidebarItem 
              title="Profissional"
              descripton="Seu Nivel"
              icon="book"
              path="/step2"
              active={state.currentStep==2}
            />
              <SidebarItem 
              title="Contacto"
              descripton="Meu Contacto"
              icon="email"
              path="/step3"
              active={state.currentStep==3}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

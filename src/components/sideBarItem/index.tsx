import { Link } from "react-router-dom";
import * as C from "./styles";
import { ReactComponent as ProfileIcon } from "../../svg/profile.svg";
import { ReactComponent as EmailIcon } from "../../svg/email.svg";
import { ReactComponent as BookIcon } from "../../svg/book.svg";
type Props = {
  title: string;
  descripton: string;
  icon: string;
  path: string;
  active:boolean
};
export const SidebarItem = ({ title, descripton, icon, path ,active}: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{descripton}</C.Description>
        </C.Info>
        <C.IconArea active={active} >

          {icon === "profile" && (
            <ProfileIcon fill="white" width={24} height={24} />
          )}

          {icon === "book" && (
            <BookIcon fill="white" width={24} height={24} />
          )}

          {icon === "email" && (
            <EmailIcon fill="white" width={24} height={24} />
          )}
        </C.IconArea>
        <C.Pointer active={active}></C.Pointer>
      </Link>
    </C.Container>
  );
};

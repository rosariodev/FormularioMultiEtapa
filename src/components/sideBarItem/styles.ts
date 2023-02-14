import styled from "styled-components";

export const Container = styled.div`

    margin: 30px 0;
    cursor:pointer;
        a{
            display:flex;
            align-items:center;
            text-decoration:none;
        }

`;
export const Info = styled.div`
flex:1;
margin-right:20px;
`;
export const Title = styled.div`
        text-align:right;
        font-weight:bolder;
        font-size:15px;
        margin-botton:5px;
        color:#FFF;



`;
export const Description = styled.div`
            font-size:13px;
            text-align:right;
            color:#B8B8D4;
`;
export const IconArea = styled.div<{active:boolean;}>`
        width:50px;
        height:50px;
        align-items:center;
        display:flex;
        justify-content:center;
        border-radius:50%;
        background-color: ${props => props.active ? '#25CD89' : '#494A7C'};
`;
export const Pointer = styled.div<{active:boolean;}>`

        width:6px;
        height:6px;
        border:3px solid #494A7C;
        border-radius:50%;
        margin-left:30px;
        margin-rigth:-6px;
        background-color:  ${props => props.active ? '#25CD89' : '#02044A'} ;
       
`;



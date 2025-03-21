import styled from "styled-components";


export const SError = styled.div`
    margin-top: 133px;
  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap:12px;
`


export const SErrorTitle = styled.span`
    font-size: 17px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
`

export const SErrorPromise = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #97979B;
    color: ${(props) => props.theme.colorError};
`


export const SErrorButton = styled.button`
    font-size: 16px;
    font-weight: 600;
    color:#6534FF;
`

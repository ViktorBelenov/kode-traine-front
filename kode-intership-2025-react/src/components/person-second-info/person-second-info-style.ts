import styled from "styled-components";
   

export const SPersonSecondInfoWrapper = styled.div`
    padding: 26px 16px;
    margin: 0 auto;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SPersonSecondInfoBirthday= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    padding-bottom: 26px;
    border-bottom: 1px solid #F7F7F8;
    margin-bottom: 23px;

    color: ${(props) => props.theme.color};

`

export const SPersonSecondInfoBirthdayFavorite= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    gap:14px;

`
   
export const SPersonSecondInfoTelephone= styled.div`
    margin-right: auto;
    
    display: flex;
    align-items: center;
    
    gap:14px;

    color: ${(props) => props.theme.color};
`
export const SPersonSecondInfoSVG = styled.svg`
    fill: ${(props) => props.theme.color};
` 

import styled from "styled-components";

export const SSearch = styled.header`
    margin-top: 8px;
`

export const SSearchWrapper = styled.div`
    padding: 0 16px;
    margin: 0 auto;
    width: 100%;
  
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const SSearchTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  margin-left: 8px;
`

export const SSearchFieldContainer = styled.div`
  display: flex;
  position:relative;
`
export const SSearchIcon = styled.svg<{ active?: boolean }>`
    position: absolute;
    top: 10px;
    left:10px;
    width: 24px;
    height: 24px;
    fill: ${(props) => (props.active ? "#050510" : "#C3C3C6")};
`

export const SSearchForm = styled.form`
    width:100%;
`

export const SSearchInput = styled.input`
    background-color: #F7F7F8;
    color:#000;
  
    width:100%;
    border-radius: 16px;
    padding:12px 44px;
  
    font-size: 18px;
    font-weight: 500;
  
    border:none;
    caret-color: #6534FF;

    &::placeholder {
        color:#C3C3C6;
    
        font-size: 18px;
        font-weight: 500;
    
        position: relative;
        top: 3px;
    }
`
export const SSearchPopupButton = styled.button`
    position: absolute;
    top: 10px;
    right:10px;
`

export const SSearchIconPopup = styled.svg<{ active?: boolean }>`
    position: absolute;
    right:10px;
    width: 24px;
    height: 24px;
    fill: ${(props) => (props.active ? '#6534FF' : '#C3C3C6')};
`

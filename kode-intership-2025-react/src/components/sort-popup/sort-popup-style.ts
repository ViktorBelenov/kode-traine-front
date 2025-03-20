import styled from "styled-components";

export const SModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(45, 52, 64, 0.3);
`;

export const SModalSort = styled.div`
  width:373px;
  box-sizing: border-box;

  position: relative;
  margin: auto;
  padding: 24px 16px;
  background-color: #ffffff;
  border-radius: 20px;
`;

export const SModalTitle = styled.h1`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #050510;
  text-align: center;
  margin-bottom: 20px;
`;

export const SModalCloseButton = styled.button`
  position: absolute;
  padding: 0;
  top: 24px;
  right: 32px;
  width: 24px;
  height: 24px;

  border: none;
  cursor: pointer;
`;

export const SModalSortList = styled.ul`
  display: flex;
  flex-direction: column;
  gap:40px;
`;

export const SModalSortLabel= styled.label`
  display: flex;
  align-items: center;

  &:hover .radio__control-mark {
  border: 2px solid #6534FF;
}
`;

export const SModalSortInput= styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

 &:checked + .radio__control-mark::before {
  content: "";
  position: absolute;
  width: 43.57%;
  height: 43.57%;
  background-color: #fff;
  border-radius: 50%;

  top: 29%;
  left: 29%;
}
`;

export const SModalSortInputDescription= styled.span`
    font-weight: 500;
    font-size: 16px;
    color: #000;
    max-width: 800px;
`





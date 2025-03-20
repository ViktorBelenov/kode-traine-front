import styled from "styled-components";


export const SJobList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 0 16px;
  margin: 0 auto;
  width: 100%;

  border-bottom: 1px solid #C3C3C6;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const SJobListButton = styled.button<{ $active: boolean }>`
    font-weight: 600;
    font-size: 15px;    
    padding: 8px 12px;

    border-bottom:${(props)=>props.$active ? '2px solid #6534FF' : 'none'}
`

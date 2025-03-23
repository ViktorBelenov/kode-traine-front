import styled from "styled-components";

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #f5f5f5;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;

  margin-left: auto;
  margin-right: 10px;
`;

export const ToggleButton = styled.button<{ $active?: boolean }>`
  background: ${(props) => (props.$active ? "#007bff" : "#ccc")};
  color: white;
  border: none;
  padding: 2px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => (props.$active ? "#0056b3" : "#aaa")};
  }
`;
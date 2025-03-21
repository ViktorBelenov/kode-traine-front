import styled from "styled-components";


export const SEmptyCard = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
`
export const SEmptyCardImg = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #FAFAFA;
`
export const SEmptyCardName = styled.div`
  width: 144px;
  height: 16px;
  border-radius: 50px;
  margin-bottom: 10px;
  background-color: #FAFAFA;
`

export const SEmptyCardJob = styled.div`
  width: 80px;
  height: 12px;
  border-radius: 50px;
  background-color: #FAFAFA;
`

export const SCard = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`

export const SCardImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`
export const SCardName = styled.h1`
  font-size: 16px;
  font-weight: 500;
`

export const SCardTag = styled.span`
  font-size: 14px;
  font-weight: 500;
  color:#97979B;
`

export const SCardJob = styled.span`
  color: #55555C;
  font-size: 13px;
  font-weight: 400;
`

export const SCardBirthdayContainer = styled.div`
  margin-left: auto;
`
export const SCardBirthdayText = styled.span`
  font-size: 15px;
  font-weight: 400;
  color:#55555C;
`


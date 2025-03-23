import styled from "styled-components"

export const SPersonMainSection = styled.section`
  background-color: ${(props) => props.theme.backgroundInfo};
`

export const SPersonMainWrapper = styled.div`
    padding: 24px;
    margin: 0 auto;
    width: 100%;
  
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SPersonMainLinkBackContainer = styled.div`
    width: 100%;
    margin-bottom: 26px;
`

export const SPersonMainImg = styled.img`
  border-radius: 50%;
  height: 104px;
  
  margin-bottom: 24px;
`


export const SPersonMainName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  
  margin-bottom: 12px;
  color: ${(props) => props.theme.infoName};
`

export const SPersonMainTag = styled.span`
  font-weight: 400;
  font-size: 17px;
  color: #97979B;
`
export const SPersonMainJob = styled.span`
  font-size: 13px;
  font-weight: 400;
  color:#55555C;
`

  
export const SPersonMainSVG = styled.svg`
fill: ${(props) => props.theme.color};
`


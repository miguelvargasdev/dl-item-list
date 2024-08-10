import styled from 'styled-components';
import { Tooltip as TT } from 'react-tooltip';


export const Tooltip = styled(TT)`
    font-family: 'Deadlock-bold';
    width: 300px;
    background-color: transparent;
    max-width: 300px;
    margin: 0;
    &&& {
        opacity: 1; 
    }

`
export const TooltipWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    border-radius: 10px;
    padding: 0px 0px 8px 0px;
    background-color: #80550F;
    -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,0.34);
    -moz-box-shadow: 0px 0px 10px rgba(0,0,0,0.34);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.34);

`

export const TooltipHeader = styled.div`
    font-family: 'Deadlock-bold';
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #C97B03;
    color: #FFEFD7;
    text-align: left;
    margin: 0;
    padding: 16px 16px ;
    & h2 {
        margin: 0;
    }
    & h3 {
        color:#9AFFD6;
        margin: 0;
    }
`

export const TooltipAttributes = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    color: #BAACA1;
    gap: 0px;
    padding: 8px 16px;
    & p {
        margin: 0;
        padding: 0;
    }
`

export const TooltipAbility = styled.div`
font-family: 'Deadlock-bold';
    color: #BAACA1;
    background-color: #80550F;
    padding: 8px 16px;
    text-align: left;
`
export const TooltipAbilityAttributeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    padding-top: 8px;
    flex-wrap: wrap;
    
`

export const TooltipAbilityAttribute = styled.div`
    background-color: #654209;
    border-radius: 5px;
    flex-grow: 1;
    padding: 8px;
    
`

export const TooltipAbilityHeader = styled.div`
    font-family: 'Deadlock-bolditalic';
    padding: 0px 0px 0px 20px;
    display: flex;
    justify-content: space-between;
    background-color: #583B0E;
    
`
export const TooltipAbilityHeaderCooldown = styled.div`
    font-family: 'Deadlock-bold';
    background-color: #0D1515;
    width: 20%;

`
export const TooltipComponent = styled.div`
    background-color: #704A0C;
`
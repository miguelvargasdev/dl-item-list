import styled from 'styled-components';
import { Tooltip as TT } from 'react-tooltip';
import { ItemCategory } from '../item/enums';
const setHeaderColor = ($category: ItemCategory) => {
    switch ($category) {
        case ItemCategory.Weapon:
            return '#C97B03';
        case ItemCategory.Vitality:
            return '#74b01c';
        case ItemCategory.Spirit:
            return '#c288f0';
    }
}
const setBackgroundColor = ($category: ItemCategory) => {
    switch ($category) {
        case ItemCategory.Weapon:
            return '#80550F';
        case ItemCategory.Vitality:
            return '#4D7215';
        case ItemCategory.Spirit:
            return '#c288f0';
    }
}
const setAbilityBackgroundColor = ($category: ItemCategory) => {
    switch ($category) {
        case ItemCategory.Weapon:
            return '#80550F';
        case ItemCategory.Vitality:
            return '#4D7215';
        case ItemCategory.Spirit:
            return '#c288f0';
    }
}
const setAbilityAttributeBackgroundColor = ($category: ItemCategory) => {
    switch ($category) {
        case ItemCategory.Weapon:
            return '#67430B';
        case ItemCategory.Vitality:
            return '#3D5B0F';
        case ItemCategory.Spirit:
            return '#c288f0';
    }
}
const setAbilityHeaderPassiveColor = ($category: ItemCategory) => {
    switch ($category) {
        case ItemCategory.Weapon:
            return '#583B0E';
        case ItemCategory.Vitality:
            return '#354F11';
        case ItemCategory.Spirit:
            return '#c288f0';
    }
}
const setIsComponentOfColor = ($category: ItemCategory) => {
    switch ($category) {
        case ItemCategory.Weapon:
            return '#704A0C';
        case ItemCategory.Vitality:
            return '#436310';
        case ItemCategory.Spirit:
            return '#c288f0';
    }
}
const setIsComponentOfIconColor = ($category: ItemCategory) => {
    switch ($category) {
        case ItemCategory.Weapon:
            return '#FFD18E';
        case ItemCategory.Vitality:
            return '#7CBC1E';
        case ItemCategory.Spirit:
            return '#c288f0';
    }
}
const setIsComponentOfTextColor = ($category: ItemCategory) => {
    switch ($category) {
        case ItemCategory.Weapon:
            return '#573908';
        case ItemCategory.Vitality:
            return '#334D0B';
        case ItemCategory.Spirit:
            return '#c288f0';
    }
}
export const Tooltip = styled(TT)`
    font-family: 'Deadlock';
    font-weight: bold;
    color: #D1CBC6;
    width: 300px;
    background-color: transparent;
    max-width: 300px;
    margin: 0;
    &&& {
        opacity: 1; 
    }

`
export const TooltipWrapper = styled.div<{ $category: ItemCategory }>`
    display: flex;
    flex-direction: column;
    gap: 0px;
    border-radius: 10px;
    padding: 0px 0px 8px 0px;
    background-color: ${props => setBackgroundColor(props.$category)};
    -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,0.34);
    -moz-box-shadow: 0px 0px 10px rgba(0,0,0,0.34);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.34);

`

export const TooltipHeader = styled.div<{ $category: ItemCategory }>`
    font-family: 'Deadlock';
    font-weight: bold;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${props => setHeaderColor(props.$category)};
    color: #FFEFD7;
    text-align: left;
    margin: 0;
    padding: 16px 16px ;
    & h2 {
        margin: 0;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    }
    & h3 {
        color:#9AFFD6;
        margin: 0;
    }
`

export const TooltipAttributes = styled.div<{ $category: ItemCategory }>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
    padding: 8px 16px;
    & p {
        margin: 0;
        padding: 0;
    }
`

export const TooltipAbility = styled.div<{ $category: ItemCategory }>`
font-family: 'Deadlock';
    font-weight: bold;
    background-color: ${props => setAbilityBackgroundColor(props.$category)};
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

export const TooltipAbilityAttribute = styled.div<{ $category: ItemCategory }>`
    background-color: ${props => setAbilityAttributeBackgroundColor(props.$category)};
    border-radius: 5px;
    flex-grow: 1;
    padding: 8px;
    
`

export const TooltipAbilityHeader = styled.div<{ $category: ItemCategory }>`
    font-family: 'Deadlock';
    font-weight: bold;
    font-style: italic;
    padding: 0px 0px 0px 20px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => setAbilityHeaderPassiveColor(props.$category)};
    
`
export const TooltipAbilityHeaderCooldown = styled.div`
    font-family: 'Deadlock';
    font-style: normal;
    background-color: #0D1515;
    width: 20%;
`
export const Component = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    font-family: 'Deadlock';
    font-weight: bold;
    height: 32px;
`
export const ComponentIcon = styled.div`
    border-radius: 50%;
    position: absolute;
    width: 32px;
    height: 32px;
    top: 50%;
    transform: translateY(-50%);
`
export const ComponentText = styled.div`
    font-family: 'Deadlock';
    padding: 0px 16px 0px 40px;
    text-transform: capitalize;
    border-radius: 16px;
    line-height: 28px;
`
export const TooltipComponentContainer = styled.div`
display: flex;
    flex-direction: column;
    align-items: start;
    padding: 6px 16px;
    gap: 6px;
    text-transform: uppercase;
    background-color: #9E630C;

    ${ComponentIcon} {
        background-color: #EC981A;
    }
    ${ComponentText} {
        background-color: #7C4C08;
    }
`

export const TooltipComponentOfContainer = styled.div<{ $category: ItemCategory }>`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 8px 16px;
    gap: 8px;
    text-transform: uppercase;
    background-color: ${props => setIsComponentOfColor(props.$category)};

    ${ComponentIcon} {
        background-color: ${props => setIsComponentOfIconColor(props.$category)};
    }
    ${ComponentText} {
        background-color: ${props => setIsComponentOfTextColor(props.$category)};
    }
`


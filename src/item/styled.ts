import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ItemCategory } from './enums';

const setCategoryColor = ($category: ItemCategory) => {
    switch ($category) {
        case ItemCategory.Weapon:
            return '#C97B03';
        case ItemCategory.Vitality:
            return '#74b01c';
        case ItemCategory.Spirit:
            return '#c288f0';
    }
}

const setSectionBackgroundColor = ($category: ItemCategory, tier: number) => {
    switch (true) {
        case $category == ItemCategory.Weapon && tier % 2 !== 0:
            return '#583F1F';
        case $category == ItemCategory.Weapon && tier % 2 === 0:
            return '#483318';
        case $category == ItemCategory.Vitality && tier % 2 !== 0:
            return '#4D7214';
        case $category == ItemCategory.Vitality && tier % 2 === 0:
            return '#405F0F';
        case $category == ItemCategory.Spirit && tier % 2 !== 0:
            return '#372248';
        case $category == ItemCategory.Spirit && tier % 2 === 0:
            return '#2D1B3C';
    }
}

export const Item = styled(motion.button)<{ $category: ItemCategory }>`
    flex-direction: column;
    width: 132px;
    height: 150px;
    border-radius: 5px;
    border: 0px;
    background-image: linear-gradient(to bottom, ${props => setCategoryColor(props.$category)} 50%, #f0e1cb 50%);
    font-family: 'TF2';
    color: #171913;
    &div {
        display: flex;
        justify-content: center;
        align-items: center
        height 50%;
    }
    -webkit-box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.34);
    -moz-box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.34);
    box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.34);
`
export const ItemSection = styled.div<{ $category: ItemCategory, $tier: number }>`
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    padding: 2em;
    background-color: ${props => setSectionBackgroundColor(props.$category, props.$tier)};
`;

export const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: left;
    column-gap: 10px;
`

export const Tab = styled(motion.button)<{ $active: boolean, $category: ItemCategory }>`
    font-family: 'Deadlock';
    font-weight: bold;
    font-size: 20px;
    color: #332409;
    position: relative;
    height: 100%;
    min-height: 24px;
    padding: 20px 32px;
    background-color: ${props => props.$active ? setCategoryColor(props.$category) :'#CBBDA7' };
    border: 0;
    border-radius: 5px 5px 0px 0px;
`
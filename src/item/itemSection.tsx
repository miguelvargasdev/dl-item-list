import React from 'react';
import * as S from './styled';
import { ItemCategory } from './enums';

export const ItemSection = ({ category, tier, children }: { category: ItemCategory, tier: number, children: React.ReactNode }) => {
    return (
        <S.ItemSection $category={category} $tier={tier}>
            {children}
        </S.ItemSection>
    )
}
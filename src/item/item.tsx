import React from 'react';
import * as S from './styled';
import { ItemT } from './types';

export const Item = ({ item, handleItemActivation }: { item: ItemT, handleItemActivation: (item: ItemT) => void }) => {
    return (
        <a
            data-tooltip-id="test"
            data-tooltip-place="right"
            onMouseEnter={() => handleItemActivation(item)}>
            <S.Item
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.02 }
                }}
                $category={item.category}
            >
                <div>
                    <p>{item.category}</p>
                </div>
                <div>
                    <p>{item.name}</p>
                </div>
            </S.Item>
        </a>
    );
}
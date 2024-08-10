import { useMemo, useState } from 'react';
import { ItemT } from './types';
import { items } from '../item/items'
import { ItemCategory } from './enums';
import { Item } from './item';
import { ItemSection } from './itemSection';
import { ItemTooltip } from '../tooltip/tooltip';

export const TabContent = ({ activeTabIndex }: { activeTabIndex: number }) => {

    const [activeItem, setActiveItem] = useState<ItemT | null>(null);

    const handleItemActivation = (item: ItemT) => {
        setActiveItem(item);
    };

    const category = useMemo(() => {
        return activeTabIndex === 0 ? ItemCategory.Weapon : activeTabIndex === 1 ? ItemCategory.Vitality : ItemCategory.Spirit;
    }, [activeTabIndex]);

    return (
        <>
            <ItemSection category={category} tier={1}>
                {items.filter(item => item.category === category && item.tier === 1).map((item, index) => (
                    <Item key={index} item={item} handleItemActivation={handleItemActivation} />
                ))}
            </ItemSection>
            <ItemSection category={category} tier={2}>
                {items.filter(item => item.category === category && item.tier === 2).map((item, index) => (
                    <Item key={index} item={item} handleItemActivation={handleItemActivation} />
                ))}
            </ItemSection>
            <ItemSection category={category} tier={3}>
                {items.filter(item => item.category === category && item.tier === 3).map((item, index) => (
                    <Item key={index} item={item} handleItemActivation={handleItemActivation} />
                ))}
            </ItemSection>
            <ItemSection category={category} tier={4}>
                {items.filter(item => item.category === category && item.tier === 4).map((item, index) => (
                    <Item key={index} item={item} handleItemActivation={handleItemActivation} />
                ))}
            </ItemSection>
            {activeItem && <ItemTooltip itemData={activeItem}></ItemTooltip>}
        </>
    )
}
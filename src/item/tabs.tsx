import * as S from './styled';
import { ItemCategory } from './enums';


export const Tab = ({ category, index, activeTabIndex, handleTabActivation }: { category: ItemCategory, index: number, activeTabIndex: number, handleTabActivation: (index: number) => void }) => {
    return (
        <S.Tab
            $active={index === activeTabIndex}
            $category={category}
            onClick={() => handleTabActivation(index)}
        >
            {category}
        </S.Tab>
    )
}
const tabs = [ItemCategory.Weapon, ItemCategory.Vitality, ItemCategory.Spirit];
export const ItemsTabs = ({ activeTabIndex, handleTabActivation }: { activeTabIndex: number, handleTabActivation: (index: number) => void }) => {
    return (
        <S.Tabs>
            {tabs.map((category: ItemCategory, index: number) => (
                <>
                    <Tab
                        category={category}
                        index={index}
                        activeTabIndex={activeTabIndex}
                        handleTabActivation={handleTabActivation} />
                </>
            ))}


        </S.Tabs >
    )
}
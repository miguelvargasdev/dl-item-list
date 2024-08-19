import { ItemCategory } from '../item/enums';
import { AbilityT, ItemT } from '../item/types';
import * as S from './styled';

/// TODO:
/// Component section
/// Fixing the positions of the ability attributes
/// Figuring out how to add bold and italic text to the ability description

const ToolTipHeader = ({ name, cost, category }: { name: string, cost: number, category: ItemCategory }) => {
    return (
        <S.TooltipHeader $category={category}>
            <h2>{name}</h2>
            <h3>{cost}</h3>
        </S.TooltipHeader>
    )
}

const TooltipAttributes = ({ attributes, category }: { attributes: string[], category: ItemCategory }) => {

    return (
        <S.TooltipAttributes $category={category}>
            {attributes.map((attr, index) => (
                <p key={index}>{attr}</p>
            ))}
        </S.TooltipAttributes>
    )
}

const TooltipAbility = ({ abilities, category }: { abilities: AbilityT[], category: ItemCategory }) => {
    return (
        abilities.map((ability) => (
            <>
                <S.TooltipAbilityHeader $category={category}>
                    { ability.category }
                    { ability.cooldown && <S.TooltipAbilityHeaderCooldown>{ability.cooldown}s</S.TooltipAbilityHeaderCooldown>}
                </S.TooltipAbilityHeader>
                { ability.description && 
                <S.TooltipAbility $category={category}>
                    { ability.description}
                    <S.TooltipAbilityAttributeWrapper>
                        { ability.attributes && ability.attributes.map((attr, index) => (
                            <S.TooltipAbilityAttribute $category={category} key={index}>{attr.includes("|") ? attr.split("|").map((subAttr) => (
                                <>
                                    {subAttr} <br/>
                                </>
                            )) : attr}</S.TooltipAbilityAttribute>
                        ))}
                    </S.TooltipAbilityAttributeWrapper>
                </S.TooltipAbility>
                }
            </>
        ))
        
    )
}
const Component = ({component} : {component: string }) => {
    return (
        <S.Component>
            <S.ComponentIcon />
            <S.ComponentText>{component}</S.ComponentText>
        </S.Component>
    )
}

const TooltipComponentSection = ({ component, category }: { component: string | string[], category: ItemCategory}) => {
    return (
        typeof component === "string" ? 
            <S.TooltipComponentOfContainer $category={category} >Is component of: <Component component={component}/></S.TooltipComponentOfContainer> : 
            component.map((comp) => (
                <S.TooltipComponentContainer>Components: <Component component={comp}/></S.TooltipComponentContainer>
        ))
    )
}


export const ItemTooltip = ({ itemData }: { itemData: ItemT }) => {
    return (
        <S.Tooltip id="test" noArrow disableStyleInjection={true}>
            <S.TooltipWrapper $category={itemData.category}>
                <ToolTipHeader name={itemData.name} cost={itemData.cost} category={itemData.category}/>
                {itemData.components && <TooltipComponentSection component={itemData.components} category={itemData.category}/>}
                {itemData.attributes && <TooltipAttributes attributes={itemData.attributes || []} category={itemData.category}/>}
                {itemData.abilities && <TooltipAbility abilities={itemData.abilities || []} category={itemData.category}/>}
                {itemData.isComponentOf && <TooltipComponentSection component={itemData.isComponentOf} category={itemData.category}/>}
            </S.TooltipWrapper>
        </S.Tooltip>
    )
}
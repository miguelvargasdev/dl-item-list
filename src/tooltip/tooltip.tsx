import { AbilityT, ItemT } from '../item/types';
import * as S from './styled';

/// TODO:
/// Component section
/// Fixing the positions of the ability attributes
/// Figuring out how to add bold and italic text to the ability description


const ToolTipHeader = ({ name, cost }: { name: string, cost: number }) => {
    return (
        <S.TooltipHeader>
            <h2>{name}</h2>
            <h3>{cost}</h3>
        </S.TooltipHeader>
    )
}

const TooltipAttributes = ({ attributes }: { attributes: string[] }) => {
    return (
        <S.TooltipAttributes>
            {attributes.map((attr, index) => (
                <p key={index}>{attr}</p>
            ))}
        </S.TooltipAttributes>
    )
}

const TooltipAbility = ({ abilities }: { abilities: AbilityT[] }) => {
    return (
        abilities.map((ability, index) => (
            <>
                <S.TooltipAbilityHeader>
                    { ability.category }
                    { ability.cooldown && <S.TooltipAbilityHeaderCooldown>{ability.cooldown}s</S.TooltipAbilityHeaderCooldown>}
                </S.TooltipAbilityHeader>
                { ability.description && 
                <S.TooltipAbility>
                    { ability.description}
                    <S.TooltipAbilityAttributeWrapper>
                        { ability.attributes && ability.attributes.map((attr, index) => (
                            <S.TooltipAbilityAttribute key={index}>{attr}</S.TooltipAbilityAttribute>
                        ))}
                    </S.TooltipAbilityAttributeWrapper>
                </S.TooltipAbility>
                }
            </>
        ))
        
    )
}

const TooltipComponent = ({ isComponentOf }: { isComponentOf: string }) => {
    return (
        <S.TooltipComponent>Is component of: {isComponentOf}</S.TooltipComponent>
    )
}


export const ItemTooltip = ({ itemData }: { itemData: ItemT }) => {
    return (
        <S.Tooltip id="test" noArrow disableStyleInjection={true}>
            <S.TooltipWrapper>
                <ToolTipHeader name={itemData.name} cost={itemData.cost} />
                {itemData.attributes && <TooltipAttributes attributes={itemData.attributes || []} />}
                {itemData.abilities && <TooltipAbility abilities={itemData.abilities || []} />}
                {itemData.isComponentOf && <TooltipComponent isComponentOf={itemData.isComponentOf}/>}
            </S.TooltipWrapper>
        </S.Tooltip>
    )
}
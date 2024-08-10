import { AbilityCategory, ItemCategory } from './enums';

export type ItemT = {
    name: string;
    cost: number;
    category: ItemCategory;
    tier?: number;
    attributes?: string[];
    abilities?: AbilityT[];
    isComponentOf?: string;
    components?: string[];
}
export type AbilityT = {
    description: string;
    cooldown?: number;
    attributes?: string[];
    category: AbilityCategory;
}
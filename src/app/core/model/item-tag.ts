import { IItem } from "./item";
import { ITag } from './tag';

export interface IItemTag{
    id: number,
    item: IItem,
    tag: ITag
}
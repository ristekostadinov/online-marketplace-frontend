import {ICategory} from './category';
import {IPhoto} from './photo';

export interface IItem{
    id: number, 
    name: string, 
    photo: IPhoto,
    salePrice: number,
    oldPrice: number,
    category: ICategory
}
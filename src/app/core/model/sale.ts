import {IStatus} from './enum/status'
import {IMarket} from './market'
import {IItem} from './item'

export interface ISale{
    id: number, 
    startDate: Date,
    endDate: Date,
    status: IStatus,
    market: IMarket,
    item: IItem
}
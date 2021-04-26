import { IMarket } from "./market";

export interface IUser{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isEnabled: boolean,
    market: IMarket
}
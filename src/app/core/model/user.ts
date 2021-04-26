import { IMarket } from "./market";

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isEnabled: boolean,
    market: IMarket,
    token: string
}

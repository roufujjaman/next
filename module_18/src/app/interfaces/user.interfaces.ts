import { Model } from "mongoose";

export interface IAddress {
    street: string,
    city: string,
    zip: number
}

export interface IUser {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    password: string,
    role: "USER" | "ADMIN" | "SUPERADMIN"
    address: IAddress
}

export interface UserMethods {
    hashPassword(password: string): Promise<string>;
}

export interface UserStatics extends Model<IUser> {
    hashPassword(password: string): string;
}
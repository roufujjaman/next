import { model, Schema } from "mongoose";
import { IAddress, IUser } from "../interfaces/user.interfaces";

const addressSchema = new Schema<IAddress>({
    street: { type: String },
    city: { type: String },
    zip: { type: Number }
},
    {
        _id: false
    });

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        // custom error message - array syntax
        required: [true, "FIRST NAME IS MISSING"],
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 13,
        max: 60
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (value: string) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: function (props) {
                return `Email ${props.value} is not valid`
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        uppercase: true,
        // custom error message - object syntax
        enum: {
            values: ["USER", "ADMIN", "SUPERADMIN"],
            message: "{VALUE} IS NOT SUPPORTED"
        },
        default: "USER"
    },
    address: { type: addressSchema }
},
    {
        versionKey: false,
        timestamps: true
    })

export const User = model("User", userSchema);
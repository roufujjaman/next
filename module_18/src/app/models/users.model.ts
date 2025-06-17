import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interfaces";

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
                return value.endsWith(".com");
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
    }
},
    {
        versionKey: false,
        timestamps: true
    })

export const User = model("User", userSchema);
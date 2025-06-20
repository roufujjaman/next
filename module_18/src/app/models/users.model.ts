import { Model, model, Schema, SchemaOptions, version } from "mongoose";
import { IAddress, IUser, UserMethods, UserStatics } from "../interfaces/user.interfaces";
import bcrypt from "bcryptjs";
import { Notes } from "./notes.model";

const addressSchema = new Schema<IAddress>({
    street: { type: String },
    city: { type: String },
    zip: { type: Number }
},
    {
        _id: false
    });
const opts = {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true }
}
const userSchema = new Schema<IUser, UserStatics, UserMethods>({
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
}, opts);

userSchema.method("hashPassword", async function (password: string): Promise<string> {
    const hash = await bcrypt.hash(password, 10);
    return hash;
})

userSchema.static('hashPassword', async function (password: string): Promise<string> {
    const hash = await bcrypt.hash(password, 10);
    return hash;
});

console.log(userSchema.methods);

userSchema.pre("save", async function (data) {
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.post("save", function (doc) {
    console.log(`%s has been saved`, doc._id);
})

userSchema.post("findOneAndDelete", async function (doc) {
    await Notes.deleteMany({ user: doc._id });
})

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
})

export const User = model<IUser, UserStatics>("User", userSchema);

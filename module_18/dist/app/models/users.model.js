"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const notes_model_1 = require("./notes.model");
const addressSchema = new mongoose_1.Schema({
    street: { type: String },
    city: { type: String },
    zip: { type: Number }
}, {
    _id: false
});
const opts = {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true }
};
const userSchema = new mongoose_1.Schema({
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
            validator: function (value) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: function (props) {
                return `Email ${props.value} is not valid`;
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
userSchema.method("hashPassword", function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        const hash = yield bcryptjs_1.default.hash(password, 10);
        return hash;
    });
});
userSchema.static('hashPassword', function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        const hash = yield bcryptjs_1.default.hash(password, 10);
        return hash;
    });
});
console.log(userSchema.methods);
userSchema.pre("save", function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcryptjs_1.default.hash(this.password, 10);
    });
});
userSchema.post("save", function (doc) {
    console.log(`%s has been saved`, doc._id);
});
userSchema.post("findOneAndDelete", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        yield notes_model_1.Notes.deleteMany({ user: doc._id });
    });
});
userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});
exports.User = (0, mongoose_1.model)("User", userSchema);

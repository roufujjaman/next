"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// testing middleware
const timeLog = (req, res, next) => {
    console.log("Request Time: ", Date.now());
    next();
};
router.use(timeLog);
router.post("/", (req, res) => {
    res.send("all todos");
});
exports.default = router;

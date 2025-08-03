"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSortVal = parseSortVal;
function parseSortVal(val) {
    switch (val) {
        case "1":
            return 1;
        case "-1":
            return -1;
        case undefined:
            return 1;
        default:
            return val;
    }
}

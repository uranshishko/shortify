"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const urlSchema = new mongoose_1.Schema({
    url: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator(v) {
                const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
                return urlRegex.test(v);
            },
        },
    },
    path: {
        type: String,
    },
    createdAt: {
        type: Date,
        expires: 60 * 60 * 24,
        default: Date.now,
    },
});
const URL = mongoose_1.model('url', urlSchema);
exports.default = URL;

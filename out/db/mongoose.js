"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connect = (ATLAS_URI) => {
    const URI = process.env.ATLAS_URI || 'mongodb://127.0.0.1:27017/shurl';
    mongoose_1.default.connect(URI, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    const db = mongoose_1.default.connection;
    db.on('error', (e) => console.log(`Error: ${e}`));
    db.once('open', () => console.log('Database connection successfull'));
};
exports.connect = connect;

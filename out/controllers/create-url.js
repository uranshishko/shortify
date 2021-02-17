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
const url_1 = __importDefault(require("../models/url"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const urlExists = yield url_1.default.findOne({ url: req.body.url });
        if (urlExists) {
            res.json({
                url: req.get('host') + '/' + urlExists.path,
            });
            return;
        }
        const url = new url_1.default(req.body);
        url.path = url._id.toString().slice(23 - 6, 24);
        yield url.save();
        res.json({
            url: req.get('host') + '/' + url.path,
        });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({
            message: 'Bad request',
        });
    }
});

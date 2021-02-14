"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_url_1 = __importDefault(require("../controllers/get-url"));
const router = express_1.Router();
router.get('/:path', get_url_1.default);
exports.default = router;

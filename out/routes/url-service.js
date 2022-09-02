"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_url_1 = __importDefault(require("./create-url"));
const get_url_1 = __importDefault(require("./get-url"));
const router = (0, express_1.Router)();
router.use('/api/v1', create_url_1.default);
router.use(get_url_1.default);
exports.default = router;

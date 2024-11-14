"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const brecord_controller_1 = require("./brecord.controller");
const router = express_1.default.Router();
router.post("/borrow", brecord_controller_1.brecordController.borrowBook);
router.post("/return", brecord_controller_1.brecordController.returnBook);
exports.brecordRoutes = router;

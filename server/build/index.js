"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Core
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 9000;
// Routes
const one = 1;
const two = 2;
app.get("/", (_req, res) => res.send(`1 + 2 = ${one + two}`));
app.listen(port);
// Message
console.log(`[app] : http://localhost:${port}`);

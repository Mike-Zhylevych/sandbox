"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = express_1.default();
server.use('/_healthcheck', (_req, res) => {
    res.status(200).json({ uptime: process.uptime() });
});
server.get('/', function (req, res) {
    console.log(req);
    res.send('Hello World!!');
});
server.listen(4004, () => { console.log('Running at http://localhost:4004'); });

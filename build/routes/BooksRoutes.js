"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BooksController_1 = __importDefault(require("../controllers/BooksController"));
class BibliotecaRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/editor', BooksController_1.default.getEditorial);
        this.router.get('/category', BooksController_1.default.getCategory);
        this.router.get('/authors', BooksController_1.default.getAutor);
        this.router.get('/', BooksController_1.default.getBooks);
        this.router.post('/files', BooksController_1.default.upload, BooksController_1.default.resizeImages);
    }
}
const bibliotecaroute = new BibliotecaRoute();
exports.default = bibliotecaroute.router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BooksController_1 = __importDefault(require("../controllers/BooksController"));
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}`);
    }
});
var upload = multer({ storage: storage });
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
        this.router.post('/files', upload.single('dataFile'), BooksController_1.default.uploads);
    }
}
const bibliotecaroute = new BibliotecaRoute();
exports.default = bibliotecaroute.router;

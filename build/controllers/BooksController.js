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
const database_1 = __importDefault(require("../database"));
const multer = require("multer");
const path = require("path");
const fs = require('fs');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dtronk9qo',
    api_key: '676695586148362',
    api_secret: 'URfuvzvIgvmaHYUV2OUc5YPqnOA'
});
const storage = multer.diskStorage({
    /*  destination: function (req, file, cb) {
          cb(null, 'src/static')
      }, */
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
class BooksController {
    getBooks(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query("SELECT * FROM documentos_digitales");
            res.json(games);
        });
    }
    getAutor(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query("SELECT * FROM autores");
            res.json(games);
        });
    }
    getCategory(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query("SELECT * FROM categorias");
            res.json(games);
        });
    }
    getEditorial(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query("SELECT * FROM editoriales");
            res.json(games);
        });
    }
    upload() {
        exports.upload = upload.single("myFile");
        console.log('hola')
    }
    ///SUBIR IMG
    resizeImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //let nombre = `${Date.now()}-${req.file.filename}`;
            var ext = path.extname(req.file.filename).toLowerCase();
            if (ext != ".png" || ext != ".jpeg" || ext != ".jpg") {
                const resultado = yield cloudinary.v2.uploader.upload(req.file.path, { height: 128, crop: "thumb" });
                res.json(resultado.secure_url);
            }
            else {
                res.status(500).json("Los formatos aceptados son .png .jpg .jpeg");
            }
        });
    }
    ;
}
const bookscontroller = new BooksController();
exports.default = bookscontroller;

import { Request, Response } from "express";
import pool from "../database";
const multer= require("multer");
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
  filename: function (req: Request, file: any, cb: any) {
    cb(null, file.originalname);
  },
});
//const upload = multer({ storage: storage });
var upload = multer({ storage: storage });
class BooksController {
  public async getBooks(request: Request, res: Response) {
    const games = await pool.query("SELECT * FROM documentos_digitales");
    res.json(games);
  }
  
  public async getAutor(request: Request, res: Response) {
    const games = await pool.query("SELECT * FROM autores");
    res.json(games);
  }
 
  public async getCategory(request: Request, res: Response) {
    const games = await pool.query("SELECT * FROM categorias");
    res.json(games);
  }

  public async getEditorial(request: Request, res: Response) {
    const games = await pool.query("SELECT * FROM editoriales");
    res.json(games);
  }

  public upload(){
    exports.upload = upload.single("myFile");
  }
  ///SUBIR IMG
  public async resizeImages(req: any, res: Response)  {
  
    //let nombre = `${Date.now()}-${req.file.filename}`;
    var ext = path.extname(req.file.filename).toLowerCase();
    if (ext!= ".png"||ext!= ".jpeg"||ext!= ".jpg" ) {

     const resultado = await cloudinary.v2.uploader.upload(req.file.path, { height: 128, crop: "thumb" });
     res.json(resultado.secure_url);
  
      
    }else{
      res.status(500).json("Los formatos aceptados son .png .jpg .jpeg");
    }
  }

  public async uploads(req: any, res: Response) {
    const file = req.file;
    console.log(file)
    res.json('games');
  }
}

const bookscontroller = new BooksController();
export default bookscontroller;

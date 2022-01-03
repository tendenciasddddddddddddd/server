import{Router}from'express';
import { Request, Response } from "express";
import BooksController from '../controllers/BooksController'
const multer= require("multer");
var storage = multer.diskStorage({
    destination: function (req: Request, file: any, cb: any) {
       cb(null, 'uploads');
    },
    filename: function (req: Request, file: any, cb: any) {
       cb(null, `${file.fieldname}-${Date.now()}`);
    }
 });
var upload = multer({ storage: storage });
class BibliotecaRoute{
   public router:Router=Router();
   
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/editor',BooksController.getEditorial);
        this.router.get('/category',BooksController.getCategory);
        this.router.get('/authors',BooksController.getAutor);
        this.router.get('/',BooksController.getBooks);
        this.router.post('/files', upload.single('dataFile'),BooksController.uploads);
        }

}
const bibliotecaroute=new BibliotecaRoute();
export default bibliotecaroute.router;
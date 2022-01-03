import{Router}from'express';
import BooksController from '../controllers/BooksController'

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
        this.router.post('/files',BooksController.upload,BooksController.resizeImages);
        }

}
const bibliotecaroute=new BibliotecaRoute();
export default bibliotecaroute.router;
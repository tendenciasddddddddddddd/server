import{Router}from'express';
import BibliotecaController from '../controllers/BibliotecaController'

class BibliotecaRoute{
   public router:Router=Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/books',BibliotecaController.listBooks);
        this.router.get('/',BibliotecaController.index);
        this.router.post('/comentario', BibliotecaController.create_comen);
        this.router.post('/sesion', BibliotecaController.buscar);
        this.router.post('/registro', BibliotecaController.registro);
        this.router.post('/Buscar', BibliotecaController.Buscar);
        }

}
const bibliotecaroute=new BibliotecaRoute();
export default bibliotecaroute.router;

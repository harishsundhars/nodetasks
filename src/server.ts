import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/Routes';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
const PORT = 5000;

class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    public DB_Url: string = 'mongodb://username:password@localhost:27018/tasks?authSource=admin';

    constructor() { 
        this.DBSetup();
        this.initializeMiddlewares();
        this.routePrv.routes(this.app);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({ credentials: true, origin: true }))
    }


    private DBSetup(): void {
        mongoose.connect(this.DB_Url)
            .then(res => { 
                console.log('mongodb connected');
                
            })
            .catch(err => { console.log('mongo error in connection:', err) });
    }

}

new App().app.listen(PORT, () => {
    console.log('Express server listening on port  ' + PORT);
})



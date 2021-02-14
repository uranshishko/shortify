import path from 'path';

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import * as db from './db/mongoose';
import urlService from './routes/url-service';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('index');
});

app.use(urlService);

db.connect(process.env.ATLAS_URI!);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is up on port ${port}`));

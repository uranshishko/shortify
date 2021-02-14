import mongoose from 'mongoose';

export const connect = (ATLAS_URI: string) => {
    const URI = process.env.ATLAS_URI || 'mongodb://127.0.0.1:27017/shurl';

    mongoose.connect(URI, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    const db = mongoose.connection;

    db.on('error', (e) => console.log(`Error: ${e}`));
    db.once('open', () => console.log('Database connection successfull'));
};

import { model, Schema, Document } from 'mongoose';

interface IUrl extends Document {
    url: string;
    path: string;
}

const urlSchema = new Schema({
    url: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator(v: string) {
                const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
                return urlRegex.test(v);
            },
        },
    },
    path: {
        type: String,
    },
    createdAt: {
        type: Date,
        expires: 60 * 60 * 24,
        default: Date.now,
    },
});

const URL = model<IUrl>('url', urlSchema);

export default URL;

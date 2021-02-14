import { Request, Response } from 'express';
import Url from '../models/url';

export default async (req: Request, res: Response) => {
    try {
        const urlExists = await Url.findOne({ url: req.body.url });
        if (urlExists) {
            res.json({
                url: req.get('host') + '/' + urlExists.path,
            });

            return;
        }

        const url = new Url(req.body);
        url.path = url._id.toString().slice(23 - 6, 23);
        await url.save();
        res.json({
            url: req.get('host') + '/' + url.path,
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            message: 'Bad request',
        });
    }
};

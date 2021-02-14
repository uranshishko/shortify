import { Request, Response } from 'express';
import Url from '../models/url';

export default async (req: Request, res: Response) => {
    const path = req.params.path;

    try {
        const url = await Url.findOne({ path });

        if (url) {
            res.redirect(url.url);

            return;
        }

        res.redirect('/not_found.html');
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, please try again later.',
        });
    }
};

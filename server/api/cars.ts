import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { Request, Response } from 'express';

export default function handler(req: Request, res: Response) {
    return res.status(200).json(require(path.join(__dirname, '../data/cars.json')));
}

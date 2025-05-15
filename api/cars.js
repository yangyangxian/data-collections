export default function handler(req, res) {
    res.status(200).json(require('../public/data/cars.json'));
}

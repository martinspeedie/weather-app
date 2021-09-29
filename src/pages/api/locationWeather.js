import axios from 'axios';

const LocationWeatherSearch = async (req, res) => {
    const { method } = req;
    const { query } = req.query;

    switch (method) {
        case 'GET':
            try {
                const response = await axios.get(`https://www.metaweather.com/api/location/${query}`);
                res.status(200).json(response.data);
            } catch (e) {
                console.log(e);
            }
            return;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default LocationWeatherSearch;

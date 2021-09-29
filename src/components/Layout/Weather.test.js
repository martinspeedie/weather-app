import 'jsdom-global/register';
import toJson from 'enzyme-to-json';

// Local imports
import '../../setupTests';

// Components
import { Weather } from './Weather';

describe('The Weather Component', () => {
    const mockData = {
        weather: {
            title: 'Melbourne',
            consolidated_weather: [
                {
                    id: 5482111432654848,
                    weather_state_name: 'Showers',
                    weather_state_abbr: 's',
                    wind_direction_compass: 'ENE',
                    created: '2021-09-28T22:24:55.860839Z',
                    applicable_date: '2021-09-29',
                    min_temp: 17.05,
                    max_temp: 21.595,
                    the_temp: 25.205,
                    wind_speed: 4.660419734658926,
                    wind_direction: 75.91824591867677,
                    air_pressure: 1017,
                    humidity: 62,
                    visibility: 14.885568281237571,
                    predictability: 73,
                },
                {
                    id: 6457784498388992,
                    weather_state_name: 'Showers',
                    weather_state_abbr: 's',
                    wind_direction_compass: 'E',
                    created: '2021-09-28T22:24:58.747855Z',
                    applicable_date: '2021-09-30',
                    min_temp: 18.15,
                    max_temp: 23.02,
                    the_temp: 23.265,
                    wind_speed: 5.346548062570588,
                    wind_direction: 91.29229524054001,
                    air_pressure: 1016,
                    humidity: 77,
                    visibility: 8.362724190726158,
                    predictability: 73,
                },
                {
                    id: 4946643204964352,
                    weather_state_name: 'Heavy Rain',
                    weather_state_abbr: 'hr',
                    wind_direction_compass: 'SE',
                    created: '2021-09-28T22:25:02.006956Z',
                    applicable_date: '2021-10-01',
                    min_temp: 18.085,
                    max_temp: 23.18,
                    the_temp: 24.015,
                    wind_speed: 4.676773429083486,
                    wind_direction: 130.95471384523373,
                    air_pressure: 1013,
                    humidity: 76,
                    visibility: 10.702497415095841,
                    predictability: 77,
                },
                {
                    id: 5160516495343616,
                    weather_state_name: 'Showers',
                    weather_state_abbr: 's',
                    wind_direction_compass: 'SW',
                    created: '2021-09-28T22:25:04.159475Z',
                    applicable_date: '2021-10-02',
                    min_temp: 18.02,
                    max_temp: 22.71,
                    the_temp: 23.884999999999998,
                    wind_speed: 4.862840007025637,
                    wind_direction: 226.28328323481168,
                    air_pressure: 1013.5,
                    humidity: 73,
                    visibility: 11.262974230493915,
                    predictability: 73,
                },
                {
                    id: 6503845204066304,
                    weather_state_name: 'Light Rain',
                    weather_state_abbr: 'lr',
                    wind_direction_compass: 'ESE',
                    created: '2021-09-28T22:25:07.358976Z',
                    applicable_date: '2021-10-03',
                    min_temp: 17.455,
                    max_temp: 23.365000000000002,
                    the_temp: 23.685,
                    wind_speed: 5.161674952681673,
                    wind_direction: 101.95027547375837,
                    air_pressure: 1012.5,
                    humidity: 74,
                    visibility: 9.271168873777142,
                    predictability: 75,
                },
                {
                    id: 5114351502491648,
                    weather_state_name: 'Showers',
                    weather_state_abbr: 's',
                    wind_direction_compass: 'E',
                    created: '2021-09-28T22:25:10.175389Z',
                    applicable_date: '2021-10-04',
                    min_temp: 17.175,
                    max_temp: 22.665,
                    the_temp: 27.34,
                    wind_speed: 5.981726318301122,
                    wind_direction: 100.50000000000001,
                    air_pressure: 1016,
                    humidity: 66,
                    visibility: 9.944424560566294,
                    predictability: 73,
                },
            ],
        },
    };
    it('renders correctly', () => {
        const tree = shallow(<Weather searchData={mockData} />);
        expect(toJson(tree)).toMatchSnapshot();
    });

    it('displays the city name', () => {
        const wrapper = mount(<Weather searchData={mockData} />);
        const value = wrapper.find('span').first().text();
        expect(value).toEqual(mockData.weather.title);
    });
});

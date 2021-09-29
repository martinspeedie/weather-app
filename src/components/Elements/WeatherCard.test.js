import 'jsdom-global/register';

// Local imports
import '../../setupTests';

// Components
import WeatherCard from './WeatherCard';

describe('The Weather Card', () => {
    const mockData = {
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
    };

    it('accepts data props', () => {
        const wrapper = mount(<WeatherCard data={mockData} />);
        expect(wrapper.props().data).toEqual(mockData);
    });

    it('displays the weather', () => {
        const wrapper = mount(<WeatherCard data={mockData} />);
        const value = wrapper.find('p').text();
        expect(value).toEqual(mockData.weather_state_name);
    });
});

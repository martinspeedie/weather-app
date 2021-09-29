import React from 'react';
import tw from 'twin.macro';
import { connect } from 'react-redux';

// Components
import WeatherCard from '../Elements/WeatherCard';

// Styles
const Wrapper = tw.div`text-center`;

const Title = tw.p`inline-block text-3xl mt-12 lg:(mt-0)`;

const Location = tw.span`text-yellow-500`;

const WeatherWrapper = tw.div`grid mt-6 gap-y-3 grid-cols-1 lg:(grid-cols-6 gap-x-3)`;

export const Weather = ({ searchData }) => {
    const weather = searchData.weather;
    if (!weather) return null;
    const forecast = weather.consolidated_weather?.slice(0, 5);

    return (
        <Wrapper>
            <Title>
                5 day forecast for <Location>{weather.title}</Location>
            </Title>
            <WeatherWrapper>
                {forecast.map((weather) => (
                    <WeatherCard key={weather.id} data={weather} />
                ))}
            </WeatherWrapper>
        </Wrapper>
    );
};

const mapStateToProps = ({ searchData }) => ({ searchData });

export default connect(mapStateToProps)(Weather);
